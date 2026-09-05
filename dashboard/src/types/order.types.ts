export type OrderMode = "BUY" | "SELL" ;

export interface OrderDetails {
  uid: string;
  price: number;
  mode: OrderMode;
}

export interface Order {
  _id: string;
  owner: string;
  symbol: string;
  exchange: string;
  isin?: string;
  name: string;
  qty: number;
  price: number;
  side:  "BUY" | "SELL";
  product: "CNC" | "MIS";
  status: "COMPLETED" | "FAILED";
  createdAt: string;
  updatedAt: string;
}