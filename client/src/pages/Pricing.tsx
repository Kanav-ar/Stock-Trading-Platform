import { Outlet } from "react-router";
import Section from "../components/layout/section/Section";
import Cards from "../components/pricing/cards-pricing/Cards";
import PricingTab from "../components/pricing/dynamicTables-pricing/PricingTab";
import AccountOpeningTable from "../components/pricing/staticTables-pricing/AccountOpeningTable";
import DematTable from "../components/pricing/staticTables-pricing/DematTable";
import OptionalServicesTable from "../components/pricing/staticTables-pricing/OptionalServicesTable";
import Charges from "../components/pricing/chargesExplained-pricing/Charges";


export default function Pricing() {
  return (
    <>
    <Section>
      <></>
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
