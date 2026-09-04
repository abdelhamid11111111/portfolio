import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { whatsappHref } from "@/data/site";
import { isLocale, locales, localeTags, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Three families, each with one job: Space Grotesk for display (its tighter,
 * slightly technical shapes give the headings character the body text should
 * not have), Inter for reading, JetBrains Mono for the "code" voice — eyebrows,
 * tech labels and the hero snippet.
 *
 * All three are variable fonts, so no weight list is needed. The CSS variables
 * are consumed by `@theme` in globals.css, which is what makes `font-sans` /
 * `font-mono` / `.font-display` resolve.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/** Both locales are prerendered at build time — neither page is dynamic. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    // hreflang and canonical have to be absolute URLs for Google to honour
    // them, and `metadataBase` is what turns the relative paths below into
    // absolute ones. Set NEXT_PUBLIC_SITE_URL in the deployment environment;
    // the localhost fallback only ever applies in development.
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: dict.meta.title,
    description: dict.meta.description,
    // hreflang, so Google serves the French page to French searchers instead of
    // treating the two locales as duplicate content.
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [localeTags[l], `/${l}`]),
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      type: "website",
      locale: localeTags[locale],
    },
  };
}

export const viewport: Viewport = {
  // One entry per theme, so the browser chrome matches whichever is active
  // instead of staying light when the page is dark.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2230" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // A URL like /de never matched a dictionary, so it is a 404 rather than a
  // page silently rendered in English.
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <html
      lang={localeTags[locale]}
      // next-themes swaps the class on this element before paint; without
      // suppressHydrationWarning React would flag the server/client mismatch.
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            {/* First tab stop on the page — lets a keyboard user jump the nav. */}
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              {dict.nav.skipToContent}
            </a>

            <SiteHeader locale={locale} nav={dict.nav} />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter nav={dict.nav} footer={dict.footer} social={dict.social} />

            {/* A landmark, so the floating action is not orphaned content
                sitting outside every region of the page. */}
            <aside aria-label={dict.whatsapp.landmark}>
              <WhatsAppButton
                href={whatsappHref(dict.whatsapp.prefill)}
                label={dict.whatsapp.ariaLabel}
              />
            </aside>

            {/* Top-right, offset past the sticky header. The default
                bottom-right would land underneath the floating WhatsApp button,
                and on a phone a bottom toast is full-width and covers it
                outright. */}
            <Toaster position="top-right" offset="84px" />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
