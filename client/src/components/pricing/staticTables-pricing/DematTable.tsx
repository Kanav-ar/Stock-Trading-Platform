import type { ReactNode } from "react";
import PricingTable from "../common-pricing/PricingTable";
import TableHeading from "../common-pricing/TableHeading";
import { dematData } from "./data/DematData";

export default function DematTable() {
  return (
    <>
      <TableHeading heading="Demat AMC (Annual Maintenance Charge)" />
      <div className="inline bg-blue-100 py-2 px-6 rounded-r max-w-xs border-[#387ed1] border-l-4">Free for first year*</div>
      <SmallText text="From second year onwards, for BSDA accounts:" />
      <PricingTable data={dematData} />
      <SmallText text="For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly." />
      <SmallText text="*Resident individual accounts only." />
    </>
  );
}

function SmallText({ text }: { text: ReactNode }) {
  return <p className="text-xs my-4 pt-4 ">{text}</p>;
}
