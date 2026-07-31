import type { Table } from "../../common-pricing/PricingTable";

export const currencyTableData: Table = {
  headers: ["", "Currency Futures", "Currency Options"],

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
      cells: ["No STT", "No STT"],
    },

    {
      title: "Transaction Charges",
      cells: ["NSE: 0.00035%", "NSE: 0.0311% (premium)"],
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
        "0.0001% or ₹10 / crore on buy side",
        "0.0001% or ₹10 / crore on buy side",
      ],
    },
  ],
};
