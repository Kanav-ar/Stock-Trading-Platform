import ZeroPricingImg from "../../../assets/pricing0.svg";
import TwentyPricingImg from "../../../assets/other-trades.svg"
import PricingCard from "./PricingCard";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-16">
        <PricingCard img={ZeroPricingImg} heading={"Free equity delivery"} text={"All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."} />
        <PricingCard img={TwentyPricingImg} heading={"Intraday and F&O trades"} text={"Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."} />
        <PricingCard img={ZeroPricingImg} heading={"Free direct MF"} text={"All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."} />
      </div>
    </>
  );
}
