import ArrowLink from "../../common/ArrowLink";

type EduInfoProps = {
  description: string;
  linkText: string;
  link: string;
};
export default function EduInfo({description, linkText, link}:EduInfoProps) {
  return (
    <div className="flex flex-col gap-4 leading-8">
        <p>
            {description}
        </p>
        <ArrowLink tag={linkText} link={link}/>
    </div>
  );
}