import { Outlet } from "react-router";
import Section from "../components/layout/section/Section";
import Cards from "../components/pricing/cards-pricing/Cards";
import PricingTab from "../components/pricing/dynamicTables-pricing/PricingTab";

export default function Pricing() {
  return (
    <>
      <Section>
        <Cards />
      </Section>

      <Section>
        <PricingTab />
        <Outlet />
      </Section>

      {/* <Section><PricingCard /></Section>
<Section><PricingCard /></Section>
<Section><PricingCard /></Section> */}
    </>
  );
}
