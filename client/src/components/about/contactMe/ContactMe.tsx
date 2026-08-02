import type React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router";
import clsx from "clsx";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";

export default function ContactMe() {
  return (
    <>
      <div className="space-y-12">
        <div>
          <Heading>Let's Connect</Heading>
          <Paragraph>
            If you've enjoyed exploring this project, I'd love to hear your
            thoughts. Whether it's discussing software engineering, exchanging
            ideas, or connecting over development, you're always welcome to
            reach out or follow my journey.
          </Paragraph>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-center">
            You can find me here{" "}
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <SocialBtn
              link="https://github.com/Kanav-ar"
              icon={<GrGithub />}
              color="purple"
            />
            <SocialBtn
              link="https://www.linkedin.com/in/ar-kanav/ "
              icon={<LiaLinkedinIn />}
              color="blue"
            />
            <SocialBtn
              link="https://x.com/ar_kanav"
              icon={<BsTwitterX />}
              color="black"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SocialBtn({
  link,
  icon,
  color,
}: {
  link: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Link
      to={link}
      className={clsx(
        "inline-flex items-center gap-3 rounded-full px-4 py-2 text-white",
        {
          "bg-purple-900 hover:bg-purple-800": color === "purple",
          "bg-blue-900 hover:bg-blue-800": color === "blue",
          "bg-black hover:bg-gray-900": color === "black",
        },
      )}
    >
      <span className="text-2xl"> {icon}</span>
    </Link>
  );
}
