import ArrowLink from "../../common/ArrowLink";
import pricing0 from "../../../assets/pricing0.svg";
import pricing1 from "../../../assets/other-trades.svg";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-12 dark:text-white">
        <div className="flex flex-col gap-8 lg:gap-10 lg:w-2/5">
          <h1 className="text-3xl font-semibold">Unbeatable Pricing</h1>{" "}
          <div className="flex flex-col gap-8">
            <p>
              {" "}
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <ArrowLink tag="See Pricing" link="" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-2 md:gap-8 justify-between lg:w-3/5">
          <PricingCard image={pricing0} tag="Free account opening" />
          <PricingCard
            image={pricing0}
            tag="Free equity delivery and direct mutual funds"
          />
          <PricingCard image={pricing1} tag="Intraday and F&O" />
        </div>
      </div>
    </>
  );
}
