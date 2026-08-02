import { Outlet } from "react-router";
import Section from "../components/layout/section/Section";
import Cards from "../components/pricing/cards/Cards";
import PricingTab from "../components/pricing/dynamicTables/PricingTab";
import AccountOpeningTable from "../components/pricing/staticTables/AccountOpeningTable";
import DematTable from "../components/pricing/staticTables/DematTable";
import OptionalServicesTable from "../components/pricing/staticTables/OptionalServicesTable";
import Charges from "../components/pricing/chargesExplained/Charges";
import Hero from "../components/pricing/hero/Hero";


export default function Pricing() {
  return (
    <>
    <Section>
      <Hero/>
    </Section>
      <Section>
        <Cards />
      </Section>

      <Section>
        <PricingTab />
        <Outlet />
      </Section>

      <Section>
        <AccountOpeningTable />
      </Section>

      <Section>
        <DematTable />
      </Section>

      <Section>
        <OptionalServicesTable />
      </Section>
      <Section>
        <Charges />
      </Section>
    </>
  );
}
