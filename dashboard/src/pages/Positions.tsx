const Positions = () => {
  return (
    <>
      <h3 className="mb-2 text-[1.3rem] font-light text-gray-700 dark:text-gray-200">
        Positions (2)
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full border-collapse">
          <thead>
            <tr className="border-y border-gray-200 dark:border-gray-700">
              <th className="px-3 py-4 text-left text-sm font-light text-gray-400 dark:text-gray-500">
                Product
              </th>

              <th className="border-r border-gray-200 px-3 py-4 text-left text-sm font-light text-gray-400 dark:border-gray-700 dark:text-gray-500">
                Instrument
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Qty.
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Avg.
              </th>

              <th className="border-r border-gray-200 px-3 py-4 text-right text-sm font-light text-gray-400 dark:border-gray-700 dark:text-gray-500">
                LTP
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                P&amp;L
              </th>

              <th className="px-3 py-4 text-right text-sm font-light text-gray-400 dark:text-gray-500">
                Chg.
              </th>
            </tr>
          </thead>

          <tbody>{/*  rows */}</tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;