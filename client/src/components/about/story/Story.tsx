import AboutSection from "../common/AboutSection";

export default function Story() {
  return (
    <AboutSection
      title={<>My Journey</>}
      glow={
        <div className=" absolute left-1/2 -translate-x-1/2 h-48 w-64 sm:h-56 sm:w-72 md:h-64 md:w-80 lg:h-72 lg:w-[25rem] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      }
    >
      <>
        My first projects were focused on getting things to work. Over time, I
        became more interested in why certain solutions were better than others.
        That shift changed the way I approach development.
        <br />
        <br />
         Today, I spend as much time thinking about architecture,
        reusability, and user experience as I do writing code. Every project
        becomes an opportunity to refine not only my technical skills but also
        the way I solve problems.
      </>
    </AboutSection>
  );
}
