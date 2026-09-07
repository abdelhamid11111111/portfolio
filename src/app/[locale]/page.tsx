import { notFound } from "next/navigation";
import { Contact } from "@/sections/Contact";
import { Faq } from "@/sections/Faq";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { TechStack } from "@/sections/TechStack";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} social={dict.social} />
      <Services dict={dict.services} />
      <TechStack dict={dict.skills} />
      <Projects locale={locale} dict={dict.projects} />
      <Faq dict={dict.faq} />
      <Contact dict={dict.contact} whatsapp={dict.whatsapp} />
    </>
  );
}
