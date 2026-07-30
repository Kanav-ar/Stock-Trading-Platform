import type React from "react";
import ArrowLink from "../../common/ArrowLink";
import HeadingProducts from "../common-products/Heading-products";
import StoreIcons from "../../common/StoreIcons";


type Button = {
  text: string;
  link: string;
};

type StoreLinks = {
  playStore:string;
  appStore:string;
}
type LeftImg = {
  img: string;
  text: React.ReactNode;
  heading: string;
  btn: Button[];
  storeLinks: StoreLinks;
};

export default function LeftImgCard({ img, heading, text, btn, storeLinks }: LeftImg) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 justify-around ">
        <div className=" flex justify-center">
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
          <StoreIcons links={storeLinks}/>
        </div>
      </div>
    </>
  );
}
