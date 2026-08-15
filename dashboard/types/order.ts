export type OrderMode = "BUY" | "SELL" ;

export interface OrderDetails {
  uid: string;
  price: number;
  mode: OrderMode;
}
