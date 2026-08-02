import AboutMe from "../components/about/aboutMe/AboutMe";
import ContactMe from "../components/about/contactMe/ContactMe";
import Hero from "../components/about/hero/Hero";
import Story from "../components/about/story/Story";
import TechStack from "../components/about/techStack/TechStack";
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
        <AboutMe />
      </Section>
      <Section>
        <TechStack />
      </Section>
      <Section>
        <ContactMe />
      </Section>
    </>
  );
}
