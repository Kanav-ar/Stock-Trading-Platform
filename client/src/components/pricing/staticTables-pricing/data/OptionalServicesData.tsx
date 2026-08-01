import type { Table } from "../../common-pricing/PricingTable";


export const optionalServicesData: Table = {
  headers: ["Service", "Billing Frequency", "Charges"],
  rows: [
    {
      title: "Tickertape",
      cells: [
        "Monthly / Quarterly / Annual",
        ["Free: ₹0", "Pro: ₹249 / ₹699 / ₹2399"],
      ],
    },
    {
      title: "Smallcase",
      cells: [
        "Per transaction",
        ["Buy & Invest More: ₹100", "SIP: ₹10"],
      ],
    },
    {
      title: "Kite Connect",
      cells: [
        "Monthly",
        ["Connect: ₹500", "Personal: Free"],
      ],
    },
  ],
};