import PricingTable from "../common-pricing/PricingTable";

import { desktopEquityTableData, mobileEquityTableData} from "./data/equity";
export default function EquityTable() {
  return (
    <>
      <PricingTable className="hidden md:block" data={desktopEquityTableData} />
      <PricingTable className="block md:hidden" data={mobileEquityTableData} />
    </>
  );
}
