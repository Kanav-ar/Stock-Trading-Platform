import type { Table } from "../../common/PricingTable";

export const commodityTableData: Table = {
  headers: ["", "Commodity Futures", "Commodity Options"],

  rows: [
    {
      title: "Brokerage",
      cells: [
        ["0.03% or ₹20/executed order", "whichever is lower"],
        "Flat ₹20 per executed order",
      ],
    },

    {
      title: "STT / CTT",
      cells: ["0.01% on sell side (Non-Agri)", "0.05% on sell side"],
    },

    {
      title: "Transaction Charges",
      cells: ["MCX: 0.0021%", "MCX: 0.0418% (premium)"],
    },

    {
      title: "GST",
      cells: [
        "18% on (Brokerage + SEBI + Transaction charges)",
        "18% on (Brokerage + SEBI + Transaction charges)",
      ],
    },

    {
      title: "SEBI Charges",
      cells: ["₹10 / crore", "₹10 / crore"],
    },

    {
      title: "Stamp Charges",
      cells: [
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    },
  ],
};
