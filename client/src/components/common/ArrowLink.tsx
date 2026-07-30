import { ChevronRight } from "lucide-react";

type ArrowLinkProps = {
  tag: string;
  link: string;
};

export default function ArrowLink({ tag, link }: ArrowLinkProps) {
  return (
    <a
      href={link}
      className="inline-flex items-center text-[#387ed1] font-semibold tracking-wider hover:text-gray-900 dark:hover:text-white"
    >
      <span>{tag}</span>
      <span className="flex flex-col justify-center"><ChevronRight size={18} /></span>
    </a>
  );
}
