import AboutMe from "../components/about/AboutMe";
import Hero from "../components/about/Hero";
import Story from "../components/about/Story";
import TechStack from "../components/about/TechStack";
import Section from "../components/layout/section/Section";

export default function About() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Story />
      </Section>
      <Section>
        <TechStack />
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <AboutMe />
      </Section>
    </>
  );
}
