# Portfolio — Abdelhamid Oug-Lhacen

Single-page portfolio site for a full stack developer, in English and French.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and shadcn/ui.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## How it is put together

Content is separated from presentation in two directions. **Structure** —
order, icons, images, links — lives in `src/data`. **Prose** lives in
`src/i18n/dictionaries`, one file per language, keyed by the same ids. Adding a
fourth service or a fifth project needs no JSX changes.

```
src/
├─ app/
│  ├─ [locale]/
│  │  ├─ layout.tsx    fonts, metadata + hreflang, providers, header/footer
│  │  └─ page.tsx      section order
│  └─ globals.css      design tokens — colours, type, spacing, shared classes
├─ proxy.ts            sends `/` to the visitor's best language
├─ i18n/               ← edit these for copy
│  ├─ config.ts        the list of locales
│  ├─ get-dictionary.ts
│  └─ dictionaries/
│     ├─ en.ts         English copy — its shape defines the Dictionary type
│     └─ fr.ts         French copy — type-checked against en.ts
├─ sections/           one file per page section, in page order
│  ├─ Hero.tsx  Services.tsx  TechStack.tsx  Projects.tsx  Faq.tsx  Contact.tsx
├─ components/
│  ├─ ui/              shadcn/ui primitives (generated — see "Adding components")
│  ├─ layout/          SiteHeader, SiteFooter
│  ├─ motion/          Reveal + MotionProvider
│  └─ site/            composite pieces: HeroVisual, ContactForm, SectionHead,
│                      SocialLinks, TechIcon, LanguageToggle, ThemeToggle,
│                      ThemeProvider, WhatsAppButton
├─ data/               ← edit these for structure
│  ├─ site.ts          name, contact details, WhatsApp number, nav links
│  ├─ services.ts      service ids + icons
│  ├─ skills.ts        the stack, grouped into tabs (product names, untranslated)
│  ├─ projects.ts      project ids, screenshots, tags, links
│  └─ faq.ts           accordion order
├─ types/index.ts      shapes for `data/`, with ids derived from the dictionary
└─ lib/utils.ts        `cn` class merge helper
```

`components/ui/` is owned by the shadcn CLI — treat those files as generated and
put custom work in `components/site/` so a future `shadcn add` cannot clobber it.

## Languages

The site is published at `/en` and `/fr`, both prerendered as static HTML. The
EN/FR switch in the header links between them, so each language is a real,
shareable, indexable URL rather than a client-side toggle. `hreflang` and
`canonical` tags are emitted per locale, and `<html lang>` follows.

Visiting `/` redirects to the best match for the browser's `Accept-Language`
header (`src/proxy.ts`), falling back to English. The redirect is a 307, not a
permanent one, because a visitor's browser language can change.

**To edit copy**, open `src/i18n/dictionaries/`. `en.ts` is the source: its
shape defines the `Dictionary` type, and `fr.ts` is typed against it, so a
missing or misspelled key fails `npm run build` instead of rendering
`undefined`. Nothing can be translated in one language and forgotten in the
other.

**To add a language**, add it to `locales` in `src/i18n/config.ts`, drop a
dictionary file beside the others, and register it in `get-dictionary.ts`.
Routing, metadata, the switcher and the static build all pick it up.

Section titles are stored pre-split as `titleLead` + `titleAccent` because the
gradient falls on different words per language — English "Recent **projects**"
accents the noun, French "Projets **récents**" the adjective. That decision
stays with the translator.

## Customising content

Everything marked `TODO:` is placeholder content.

**Contact details** — `src/data/site.ts`. The WhatsApp number must be in full
international format with no `+`, spaces or dashes (e.g. `212612345678`); it
feeds both the floating button and the contact card. The prefilled WhatsApp
message is translated, so it lives in the dictionaries.

**Projects** — structure in `src/data/projects.ts`, copy under `projects.items`
in each dictionary. Drop a screenshot into `public/projects/` and point `image`
at it. Images render in a fixed 16:10 box, so any resolution at that ratio drops
in without changing the layout. Omit `liveUrl` or `repoUrl` and that button
disappears from the card. The four PNGs currently there are generated
placeholders — replace them.

**Skills** — `src/data/skills.ts`. Product names are not translated, so they
stay in the data; each category's label and blurb come from the dictionaries.
Each skill's `icon` must be a key of the map in `components/site/TechIcon.tsx`;
add the glyph there when you add a skill.

**Deployment** — set `NEXT_PUBLIC_SITE_URL` to your live origin (see
`.env.example`). It is what makes the canonical and hreflang tags absolute
URLs, which Google requires; without it they fall back to localhost.

**Wiring up the contact form** — `components/site/ContactForm.tsx` validates on
the client and then calls `submitMessage`, which is currently a stub that logs
and resolves. The comment above it shows exactly what to replace it with: a POST
to a route handler at `src/app/api/contact/route.ts` that sends the mail through
Resend, Nodemailer or a form service. Keep the API key in `.env.local` and
re-validate on the server — the client-side checks are a convenience for the
visitor, not a security boundary.

## Design system

All colour, type and spacing decisions are tokens in `src/app/globals.css`, split
into a light ramp on `:root` and a dark ramp on `.dark`. Components reference the
token names only, so no section can drift out of theme. To restyle the site,
change the tokens rather than the components.

- **Colour** — one accent (indigo `--primary`) carries every call to action,
  active state and focus ring. `--brand-cyan` is decorative only: the far end of
  the display gradient and the hero glow, never text.
- **Type** — Space Grotesk for display (`.font-display`), Inter for body,
  JetBrains Mono for the "code" voice: eyebrows, tech labels, the hero snippet.
  All three are variable fonts loaded through `next/font`.
- **Rhythm** — `--section-pad` and the `.wrap` container are used by every
  section, which is what keeps vertical spacing and left edges consistent.

Theme is handled by `next-themes` and defaults to the visitor's OS setting; the
header toggle overrides it and the choice persists.

## Accessibility and motion

Semantic landmarks throughout, a skip link, labelled sections, `aria-current` on
the active nav item and on the current language, and focus moved to the first
invalid field on a failed form submit. Audited with axe-core: zero violations
across both languages in both themes.

Scroll-entry animations use Framer Motion (`motion`). `MotionProvider` sets
`reducedMotion="user"` globally, so a visitor who asks for reduced motion gets
content that appears without moving, and `globals.css` drops smooth scrolling for
them too.

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

Configured in `components.json` (radix base, `nova` preset, CSS variables). The
preset's shared styles come from `shadcn/tailwind.css`, imported at the top of
`globals.css` — which is why `shadcn` is a runtime dependency rather than a dev
one.
