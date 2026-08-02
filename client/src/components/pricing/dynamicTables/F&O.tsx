import { FandOData } from "./data/F&O";
import PricingTable from "../common/PricingTable";

export default function FandOTable() {
  return (
    <>
        <PricingTable data={FandOData}/>
    </>
  );
}