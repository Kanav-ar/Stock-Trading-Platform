import Menu from "./Menu";

const TopBar = () => {
  return (
    <header className="flex h-16 md:h-[10vh] w-full items-center bg-white shadow-[0_0_4px_2px_rgb(236,235,235)] border-gray-200 transition-colors dark:bg-[#070d17] dark:shadow-none border-b dark:border-gray-700">
      <div
        className=" hidden lg:flex basis-[32%] h-full items-center justify-around border-r border-gray-200 px-5 py-2 dark:border-gray-700
        "
      >
        <div className="flex basis-[40%] items-center justify-evenly">
          <p className="mr-2 whitespace-nowrap text-[0.8rem] font-medium uppercase text-[#616161] dark:text-gray-300 hover:cursor-pointer">
            NIFTY 50
          </p>

          <p className="mr-2 text-[0.8rem] font-medium text-[#df4949]">100.2</p>

          <p className="text-[0.8rem] font-normal text-[#929292]">+0.45%</p>
        </div>

        <div className="flex basis-[40%] items-center justify-evenly">
          <p className="mr-2 whitespace-nowrap text-[0.8rem] font-medium uppercase text-[#616161] dark:text-gray-300 hover:cursor-pointer">
            SENSEX
          </p>

          <p className="mr-2 text-[0.8rem] font-medium text-[#df4949]">100.2</p>

          <p className="text-[0.8rem] font-normal text-[#929292]">+0.31%</p>
        </div>
      </div>

      <Menu />
    </header>
  );
};

export default TopBar;
