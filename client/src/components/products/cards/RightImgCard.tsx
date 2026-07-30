import ArrowLink from "../../common/ArrowLink";
import HeadingProducts from "../common-products/Heading-products";

type Button = {
  text: string;
  link: string;
};

type RightImg = {
  img: string;
  text: React.ReactNode;
  heading: string;
  btn: Button[];
};
export default function RightImgCard({ img, heading, text, btn }: RightImg) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-around">
        <div className=" flex justify-center block lg:hidden " >
          <img src={img} alt="Image" />
        </div>
        <div className=" flex flex-col justify-center gap-8">
          <HeadingProducts heading={heading} />
          <p className="lg:max-w-xs">{text}</p>
          <div className="flex gap-4">
            {btn?.map((el) => (
              <ArrowLink key={el.link} tag={el.text} link={el.link} />
            ))}
          </div>
        </div>
        <div className=" flex  hidden lg:block" >
          <img src={img} alt="Image" />
        </div>
      </div>
    </>
  );
}
