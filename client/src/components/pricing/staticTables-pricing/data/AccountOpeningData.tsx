import  FreeTag from "../../common-pricing/FreeTag";
import type { Table } from "../../common-pricing/PricingTable";

export const accountOpeningData: Table = {
  headers: ["Type of account", "Charges"],
  rows: [
    {
      title: "Individual account",
      cells: [<FreeTag/>],
    },
    {
      title: "Minor account",
      cells: [<FreeTag/>],
    },
    {
      title: "NRI account",
      cells: ["₹500"],
    },
    {
      title: "HUF account",
      cells: [[<><FreeTag/> (online)</>,"/ ₹500 (offline)"]],
    },
    {
      title: "Partnership, LLP, and Corporate accounts",
      cells: [["₹500", "(Offline only)"]],
    },
  ],
};