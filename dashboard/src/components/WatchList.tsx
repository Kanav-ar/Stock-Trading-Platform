const WatchList = () => {
  return (
    <aside
      className="
        hidden
        lg:block
        lg:basis-[32%]
        h-screen
        overflow-y-auto
        border-r
        border-gray-200
        bg-white
        shadow-[0_0_4px_1px_rgb(236,235,235)]
        dark:border-gray-700
        dark:bg-[#070d17]
        dark:shadow-none
      "
    >

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="
            w-full
            border-b
            border-gray-200
            bg-transparent
            px-5
            py-4
            pr-20
            text-[0.9rem]
            font-normal
            text-gray-700
            placeholder:text-gray-400
            outline-none
            dark:border-gray-700
            dark:text-gray-200
            dark:placeholder:text-gray-500
          "
        />

        <span
          className="
            absolute
            right-5
            text-[0.9rem]
            font-normal
            text-gray-400
            dark:text-gray-500
          "
        >
          9 / 50
        </span>
      </div>


      <ul className="pb-20">
        {/* watchlist */}
      </ul>
    </aside>
  );
};

export default WatchList;