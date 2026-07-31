import { currencyTableData } from "./data/currency";
import PricingTable from "../common-pricing/PricingTable";

export default function CurrencyTable() {
  return (
    <>
      <PricingTable data={currencyTableData} />
    </>
  );
}
