const Holdings = () => {
  return (
    <>
      <h3 className="mb-2 text-[1.3rem] font-light text-gray-700 dark:text-gray-200">
        Holdings (13)
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead>
            <tr className="border-y border-gray-200 dark:border-gray-700">
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
                Cur. val
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                P&amp;L
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Net chg.
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Day chg.
              </th>
            </tr>
          </thead>

          <tbody>{/*  rows */}</tbody>
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

export default Holdings;
