import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import mypic from "../../../assets/My Pic.jpg";
import {
  GraduationCap,
  BookOpen,
  Target,
  LaptopMinimal,
  Rocket,
} from "lucide-react";
import type React from "react";

export default function AboutMe() {
  return (
    <div>
      <Heading children="About Me" />

      <div className="mt-24 gap-16 flex flex-col justify-between md:flex-row md:items-center ">
        <div className="relative flex flex-col items-center md:max-w-2xl">
          <div className="absolute inset-0 -z-10 rounded-full bg-blue-400/10 blur-3xl " />
          <div className="text-center space-y-4">
            <img
              src={mypic}
              alt="Kanav"
              className="h-56 w-56 md:h-72 md:w-72 rounded-full object-cover shadow-2xl"
            />
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Kanav Arora
            </span>
          </div>
          <Paragraph className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every project is an opportunity to improve not just the code, but
            the way I think about building software. I enjoy projects that
            challenge me to think beyond the obvious solution.
          </Paragraph>
        </div>

        <div className=" space-y-8">
          <ProfileItem
            icon={<GraduationCap size={18} />}
            title="Education"
            value="B.Tech Computer Science"
          />
          <ProfileItem
            icon={<LaptopMinimal size={18} />}
            title="Current Focus"
            value="Building production ready full stack applications.
"
          />
          <ProfileItem
            icon={<BookOpen size={18} />}
            title="Currently Learning"
            value="Next.js • System Design • DSA"
          />

          <ProfileItem
            icon={<Target size={18} />}
            title="Goal"
            value="Build scalable software that solves real world problems."
          />
          <ProfileItem
            icon={<Rocket size={18} />}
            title="Learning In Public"
            value="Documenting my development journey by sharing projects, progress, and lessons learned."
          />
        </div>
      </div>
      <blockquote className="mt-16 border-l-4 border-blue-600 pl-5 italic text-gray-500 dark:text-gray-400">
        "Learning isn't about collecting technologies it's about developing
        better ways to think as an engineer."
      </blockquote>
    </div>
  );
}

function ProfileItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode | string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-xl bg-blue-500/10 p-3 text-[#387ed1]">{icon}</div>

      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-500">
          {title}
        </h3>

        <p className="font-medium text-sm dark:text-white">{value}</p>
      </div>
    </div>
  );
}
