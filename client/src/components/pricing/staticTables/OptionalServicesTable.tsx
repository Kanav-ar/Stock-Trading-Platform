import PricingTable from "../common/PricingTable";
import TableHeading from "../common/TableHeading";
import { optionalServicesData } from "./data/OptionalServicesData";

export default function OptionalServicesTable() {
  return (
    <>
    <TableHeading heading="Charges for optional value added services"/>
    <PricingTable data={optionalServicesData}/>
    </>
  );
}