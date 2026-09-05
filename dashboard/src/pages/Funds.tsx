import { useEffect } from "react";
import { Link } from "react-router";
import { getFunds } from "../api/funds.api";
import { useFundsStore } from "../store/funds.store";

const Funds = () => {
  const { funds, setFunds } = useFundsStore();

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const fundsData = await getFunds();
        setFunds(fundsData);
      } catch (error) {
        console.error("Failed to fetch funds:", error);
      }
    };

    fetchFunds();
  }, [setFunds]);

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 rounded-md md:flex-row">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 md:text-left">
          Instant, zero-cost fund transfers with UPI
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <button className="rounded-sm bg-green-500 px-5 py-2 text-white hover:bg-green-400">
            Add funds
          </button>

          <button className="rounded-sm bg-blue-500 px-5 py-2 text-white hover:bg-blue-400">
            Withdraw
          </button>
        </div>
      </div>

      <div className="mt-[5%] flex flex-col justify-between gap-8 lg:flex-row">
        <div className="w-full lg:basis-[48%]">
          <span className="mb-[2%] flex items-center">
            <p className="text-xl font-light text-gray-700 dark:text-gray-200">
              Equity
            </p>
          </span>

          <div className="border border-gray-300 px-[8%] py-[5%] dark:border-gray-700">
            <div className="mb-[5%] flex items-center justify-between">
              <p className="text-base text-gray-500 dark:text-gray-400">
                Available margin
              </p>

              <p className="text-2xl text-blue-500 dark:text-blue-400">
                {(funds ? funds.availableCash - funds.usedMargin : 0).toFixed(
                  2,
                )}{" "}
              </p>
            </div>

            <div className="mb-[5%] flex items-center justify-between">
              <p className="text-base text-gray-500 dark:text-gray-400">
                Used margin
              </p>

              <p className="text-2xl text-gray-800 dark:text-gray-200">
                {funds?.usedMargin.toFixed(2) ?? "0.00"}{" "}
              </p>
            </div>

            <div className="mb-[5%] flex items-center justify-between">
              <p className="text-base text-gray-500 dark:text-gray-400">
                Available cash
              </p>

              <p className="text-2xl text-gray-800 dark:text-gray-200">
                {funds?.availableCash.toFixed(2) ?? "0.00"}{" "}
              </p>
            </div>

            <hr className="mb-[5%] h-px border-0 bg-gray-300 dark:bg-gray-700" />

            {[
              ["Opening Balance", funds?.openingBalance.toFixed(2) ?? "0.00"],
              ["Payin", funds?.payin.toFixed(2) ?? "0.00"],
              ["SPAN", "0.00"],
              ["Delivery margin", "0.00"],
              ["Exposure", "0.00"],
              ["Options premium", "0.00"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="mb-[5%] flex items-center justify-between gap-4"
              >
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {label}
                </p>

                <p className="shrink-0 dark:text-gray-200">{value}</p>
              </div>
            ))}

            <hr className="mb-[5%] h-px border-0 bg-gray-300 dark:bg-gray-700" />

            {[
              ["Collateral (Liquid funds)", "0.00"],
              ["Collateral (Equity)", "0.00"],
              ["Total Collateral", "0.00"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="mb-[5%] flex items-center justify-between gap-4"
              >
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {label}
                </p>

                <p className="shrink-0 dark:text-gray-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 
        <div className="w-full lg:basis-[48%]">
          <div className="flex flex-col items-center px-[8%] py-[8%] text-center lg:py-[2%]">
            <p className="mb-[10%] text-gray-300 dark:text-gray-500">
              You don't have a commodity account
            </p>

            <Link
              to=""
              className="rounded-sm bg-blue-500 px-5 py-2 text-white hover:bg-blue-400"
            >
              Open Account
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Funds;
