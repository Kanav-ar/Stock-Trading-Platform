import Section from "../components/layout/section/Section";
import FAQs from "../components/support/FAQs/FAQ";
import Hero from "../components/support/hero/Hero";

export default function Support() {
  return (
    <>
      <Section className="bg-gray-100 dark:bg-blue-950">
        <Hero />
      </Section>
      <Section >
        <FAQs />
      </Section>
    </>
  );
}
