import PricingTable from "../common-pricing/PricingTable";
import TableHeading from "../common-pricing/TableHeading";
import { accountOpeningData } from "./data/AccountOpeningData";

export default function AccountOpeningTable() {
  return (
    <>
      <TableHeading heading="Charges for account opening"/>
      <PricingTable data={accountOpeningData} />
    </>
  );
}
