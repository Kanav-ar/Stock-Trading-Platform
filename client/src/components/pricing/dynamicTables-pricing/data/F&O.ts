import type { Table } from "../../common-pricing/PricingTable";

export const FandOData: Table = {
  headers: ["","F&O - Futures", "F&O - Options"],

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
      cells: [
        "0.05% on sell side",
        [
          "0.15% of intrinsic value",
          "on exercised options",
          "0.15% on sell side (premium)",
        ],
      ],
    },

    {
      title: "Transaction Charges",
      cells: [
        ["NSE: 0.00183%", "BSE: 0"],
        ["NSE: 0.03553%", "BSE: 0.0325%"],
      ],
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
