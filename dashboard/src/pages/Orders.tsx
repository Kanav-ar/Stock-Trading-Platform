import { Link } from "react-router";

const Orders = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-6 max-w-md text-lg font-light text-gray-500 dark:text-gray-400">
        You haven't placed any orders today
      </p>

      <Link
        to="/"
        className="rounded-sm bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-500"
      >
        Get started
      </Link>
    </div>
  );
};

export default Orders;