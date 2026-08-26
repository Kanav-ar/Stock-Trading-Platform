export type OrderMode = "BUY" | "SELL" ;

export interface OrderDetails {
  uid: string;
  price: number;
  mode: OrderMode;
}

export interface Order {
  _id: string;
  name: string;
  qty: number;
  price: number;
  mode: "BUY" | "SELL";
}