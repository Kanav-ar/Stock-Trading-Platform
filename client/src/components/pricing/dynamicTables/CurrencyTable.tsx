import { currencyTableData } from "./data/currency";
import PricingTable from "../common/PricingTable";

export default function CurrencyTable() {
  return (
    <>
      <PricingTable data={currencyTableData} />
    </>
  );
}
