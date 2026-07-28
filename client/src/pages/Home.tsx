import OpenAccount from "../components/common/OpenAccount";
import Education from "../components/home/Education/Education";
import Hero from "../components/home/Hero/Hero";
import Pricing from "../components/home/Pricing/Index";
import Stats from "../components/home/Stats/Index";
import Section from "../components/layout/section/Section";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Stats />
      </Section>
      <Section>
        <Pricing />
      </Section>
      <Section>
        <Education />
      </Section>
      <Section>
        <OpenAccount />
      </Section>
    </>
  );
}
