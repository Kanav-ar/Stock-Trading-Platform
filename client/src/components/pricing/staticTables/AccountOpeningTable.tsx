import PricingTable from "../common/PricingTable";
import TableHeading from "../common/TableHeading";
import { accountOpeningData } from "./data/AccountOpeningData";

export default function AccountOpeningTable() {
  return (
    <>
      <TableHeading heading="Charges for account opening"/>
      <PricingTable data={accountOpeningData} />
    </>
  );
}
