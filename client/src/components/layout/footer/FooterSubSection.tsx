type FooterLink = {
  text: string;
  href: string;
};

type FooterSubSectionProps = {
  heading: string;
  links: FooterLink[];
};

export default function FooterSubSection({
  heading,
  links,
}: FooterSubSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold ">{heading}</h3>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#387ed1] dark:text-gray-300"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
