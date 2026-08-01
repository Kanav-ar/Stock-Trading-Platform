import PricingTable from "../common-pricing/PricingTable";
import TableHeading from "../common-pricing/TableHeading";
import { optionalServicesData } from "./data/OptionalServicesData";

export default function OptionalServicesTable() {
  return (
    <>
    <TableHeading heading="Charges for optional value added services"/>
    <PricingTable data={optionalServicesData}/>
    </>
  );
}