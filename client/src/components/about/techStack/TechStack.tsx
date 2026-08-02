import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { motion } from "motion/react";
import { Atom, Server, Database, Wrench } from "lucide-react";

const cards = [
  {
    icon: <Atom size={30} />,
    title: "Frontend Development",
    description:
      "Creating interfaces that feel intuitive, responsive, and enjoyable to interact with. I enjoy refining the small details that make an application feel polished.",
    tech: ["React", "Tailwind CSS", "Motion"],
  },
  {
    icon: <Server size={30} />,
    title: "Backend Development",
    description:
      "Building reliable backends that keep applications organized behind the scenes. I enjoy thinking about architecture, data flow, and writing code that's easy to maintain.",
    tech: ["Node.js", "Express", "Bun"],
  },
  {
    icon: <Database size={30} />,
    title: "Data & Persistence",
    description:
      "Designing data models that keep applications organized, reliable, and efficient. I enjoy thinking about how information is stored, structured, and retrieved.",
    tech: ["MongoDB", "SQL"],
  },
  {
    icon: <Wrench size={30} />,
    title: "Developer Workflow",
    description:
      "Using modern tools to write clean code, collaborate efficiently and ship projects. ",
    tech: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    icon: <Wrench size={30} />,
    title: "Programming Languages",
    description:
      "Every language teaches a different way of thinking and solving problems.",
    tech: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    icon: <Wrench size={30} />,
    title: "Always Learning....",
    description:
      "Exploring new ideas and improving through real world projects.",
    tech: ["Next.js", "Docker", "System Design", "Problem Solving"],
  },
];

export default function TechStack() {
  return (
    <div>
      <Heading>Building Blocks</Heading>

      <Paragraph className="mx-auto mt-6 max-w-3xl text-center text-lg">
        The tools I use are constantly evolving, but the way I approach
        development stays the same. From crafting intuitive user interfaces to
        building reliable backend systems. These are the building blocks behind
        the projects I create.
      </Paragraph>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:border-[#387ed1] hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-[#387ed1] transition-transform duration-300 group-hover:scale-110">
              {card.icon}
            </div>

            <h2 className="text-2xl font-semibold dark:text-white">
              {card.title}
            </h2>

            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">
              {card.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {card.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all group-hover:bg-[#387ed1] group-hover:text-white dark:bg-slate-800 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
