import { commodityTableData } from "./data/commodity";
import PricingTable from "../common-pricing/PricingTable";

export default function CommodityTable() {
  return (
    <>
      <PricingTable data={commodityTableData} />
    </>
  );
}
