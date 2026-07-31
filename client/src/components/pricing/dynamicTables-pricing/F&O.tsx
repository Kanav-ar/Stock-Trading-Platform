import { FandOData } from "./data/F&O";
import PricingTable from "../common-pricing/PricingTable";

export default function FandOTable() {
  return (
    <>
        <PricingTable data={FandOData}/>
    </>
  );
}