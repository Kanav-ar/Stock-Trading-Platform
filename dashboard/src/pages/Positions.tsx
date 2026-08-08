import { positions } from "../data/data.ts";

const Positions = () => {
  return (
    <>
      <h3 className="mb-2 text-[1.3rem] font-light text-gray-700 dark:text-gray-200">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead>
            <tr className="border-y border-gray-200 dark:border-gray-700">
              <th className="border-r border-gray-200 px-3 py-4 text-left text-sm font-light text-gray-400 dark:border-gray-700 dark:text-gray-500">
                Product
              </th>
              <th className="border-r border-gray-200 px-3 py-4 text-left text-sm font-light text-gray-400 dark:border-gray-700 dark:text-gray-500">
                Instrument
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Qty.
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Avg. cost
              </th>

              <th className="border-r border-gray-200 px-3 py-4 text-right text-sm font-light text-gray-400 dark:border-gray-700 dark:text-gray-500">
                LTP
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                P&amp;L
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Day chg.
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-800 dark:text-gray-300">
            {positions.map((stock, index) => {
              const curVal = stock.price * stock.qty;
              const isProfit = curVal - stock.avg * stock.qty >= 0.0;

              const profClass = isProfit
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400";

              const dayClass = stock.isLoss
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400";

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <td className="border-r border-gray-200 px-3 py-4 text-left dark:border-gray-700">
                    {stock.product}
                  </td>
                  <td className="border-r border-gray-200 px-3 py-4 text-left dark:border-gray-700">
                    {stock.name}
                  </td>

                  <td className="px-3 py-4 text-right">{stock.qty}</td>

                  <td className="px-3 py-4 text-right">
                    {stock.avg.toFixed(2)}
                  </td>

                  <td className="border-r border-gray-200 px-3 py-4 text-right dark:border-gray-700">
                    {stock.price.toFixed(2)}
                  </td>

                  <td className={`px-3 py-4 text-right ${profClass}`}>
                    {(curVal - stock.avg * stock.qty).toFixed(2)}
                  </td>

                  <td className={`px-3 py-4 text-right ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-[5%] flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:basis-1/3">
          <h5 className="text-[1.8rem] font-light text-gray-700 dark:text-gray-200">
            29,875.
            <span className="text-sm font-light">55</span>
          </h5>

          <p className="mt-[2%] text-sm font-light text-gray-400 dark:text-gray-500">
            Total investment
          </p>
        </div>

        <div className="w-full md:basis-1/3">
          <h5 className="text-[1.8rem] font-light text-gray-700 dark:text-gray-200">
            31,428.
            <span className="text-sm font-light">95</span>
          </h5>

          <p className="mt-[2%] text-sm font-light text-gray-400 dark:text-gray-500">
            Current value
          </p>
        </div>

        <div className="w-full md:basis-1/3">
          <h5 className="text-[1.8rem] font-light text-green-500 dark:text-green-400">
            1,553.40 (+5.20%)
          </h5>

          <p className="mt-[2%] text-sm font-light text-gray-400 dark:text-gray-500">
            P&amp;L
          </p>
        </div>
      </div>
    </>
  );
};

export default Positions;
