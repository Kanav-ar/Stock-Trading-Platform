import { useEffect, useState } from "react";
import { Link } from "react-router";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(()=>{
    (async()=>{
      const response = await fetch("/api/orders");
      const data = await response.json();

      setAllOrders(data.data)

    })()

  },[])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      {allOrders.length === 0 ? (
        <>
          <p className="mb-6 max-w-md text-lg font-light text-gray-500 dark:text-gray-400">
            You haven't placed any orders today
          </p>

          <Link
            to="/"
            className="rounded-sm bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-500"
          >
            Get started
          </Link>
        </>
      ) : (
        allOrders
      )}
    </div>
  );
};

export default Orders;
