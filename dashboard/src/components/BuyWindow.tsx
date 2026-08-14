import { useState } from "react";

interface BuyActionWindowProps {
  uid: string;
  price: number;
  onClose: () => void;
}

interface StockDetails {
  price: number;
  quantity: number;
}

interface OrderInputProps {
  name: string;
  inpType: "text" | "number";
  value: string | number;
  onChange: (value: string) => void;
}

export default function BuyWindow({
  uid,
  price,
  onClose,
}: BuyActionWindowProps) {
  const [stockDetails, setStockDetails] = useState<StockDetails>({
    price: price,
    quantity: 1,
  });

  async function handleBuyClick(){
    const response = await fetch("/api/order",{
      method:"POST",
      headers: {
      "Content-Type": "application/json",
    },
      body:JSON.stringify({
        name:uid,
        qty: stockDetails.quantity,
        price: stockDetails.price,
        mode: "BUY"
      })
    })
    const data = await response.json();
    console.log(data)
    onClose()
  }

  return (
    <div className="fixed right-6 top-1/2 z-50 w-96 -translate-y-1/2 rounded-2xl border border-black/10 bg-white/90 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111827]/95">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Buy
          </p>

          <h2 className="text-xl font-semibold dark:text-white">
            {uid}
          </h2>
        </div>

        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          ✕
        </button>
      </div>

      <OrderInput
        name="Quantity"
        inpType="number"
        value={stockDetails.quantity}
        onChange={(value) =>
          setStockDetails((prev) => ({
            ...prev,
            quantity: Number(value),
          }))
        }
      />

      <OrderInput
        name="Price"
        inpType="number"
        value={stockDetails.price}
        onChange={(value) =>
          setStockDetails((prev) => ({
            ...prev,
            price: Number(value),
          }))
        }
      />

      <button
        className="mt-6 w-full rounded-lg bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
      onClick={handleBuyClick}>
        Buy
      </button>
    </div>
  );
}

function OrderInput({
  name,
  inpType,
  value,
  onChange,
}: OrderInputProps) {
  return (
    <div className="mt-6">
      <label className="text-sm text-gray-600 dark:text-gray-400">
        {name}
      </label>

      <input
        type={inpType}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-2 w-full rounded-lg
          border border-gray-200
          bg-transparent
          px-3 py-2
          outline-none
          focus:border-blue-500
          dark:border-white/10
          dark:text-white
        "
      />
    </div>
  );
}