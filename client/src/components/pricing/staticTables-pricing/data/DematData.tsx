import FreeTag from "../../common-pricing/FreeTag";
import type { Table } from "../../common-pricing/PricingTable";
export const dematData: Table = {
  headers: ["Value of holdings", "AMC"],
  rows: [
    {
      title: "Up to ₹4 lakh",
      cells: [<FreeTag/>],
    },
    {
      title: "₹4 lakh – ₹10 lakh",
      cells: ["₹100/year, + 18% GST, Charged quarterly"],
    },
    {
      title: "Above ₹10 lakh",
      cells: ["₹300/year, + 18% GST, Charged quarterly"],
    },
  ],
};