const Summary = () => {
  return (
    <>
      <div>
        <h6 className="mb-[20px] text-[1.5rem] font-normal text-[rgb(83,83,83)] dark:text-gray-100">
          Hi, User!
        </h6>

        <SectionLine />
      </div>

      <div className="pb-[2%]">
        <SectionHeading heading="Equity" />

        <div className="flex w-full flex-col gap-8 md:w-1/2 md:flex-row md:items-center md:justify-evenly">

          <div>
            <h3 className="text-[2.5rem] font-light text-[rgb(71,71,71)] dark:text-gray-100">
              3.74k
            </h3>

            <p className="text-[0.8rem] text-[rgb(136,136,136)] dark:text-gray-400">
              Margin available
            </p>
          </div>

          <hr className="hidden h-[70px] border-l border-[#f3f2f2] md:block dark:border-gray-700" />

          <div>
            <p className="mb-[10px] whitespace-nowrap text-[0.8rem] text-[rgb(136,136,136)] dark:text-gray-400">
              Margins used
              <span className="ml-[5%] inline text-[0.9rem] text-[rgb(100,100,100)] dark:text-gray-200">
                0
              </span>
            </p>

            <p className="whitespace-nowrap text-[0.8rem] text-[rgb(136,136,136)] dark:text-gray-400">
              Opening balance
              <span className="ml-[5%] inline text-[0.9rem] text-[rgb(100,100,100)] dark:text-gray-200">
                3.74k
              </span>
            </p>
          </div>
        </div>

        <SectionLine />
      </div>

      <div className="pb-[2%]">
        <SectionHeading heading="Holdings (13)" />

        <div className="flex w-full flex-col gap-8 md:w-1/2 md:flex-row md:items-center md:justify-evenly">

          <div>
            <h3 className="text-[2.5rem] font-light text-[rgb(72,194,55)]">
              1.55k{" "}
              <small className="text-[0.8rem] text-[rgb(72,194,55)]">
                +5.20%
              </small>
            </h3>

            <p className="text-[0.8rem] text-[rgb(136,136,136)] dark:text-gray-400">
              P&amp;L
            </p>
          </div>

          <hr className="hidden h-[70px] border-l border-[#f3f2f2] md:block dark:border-gray-700" />

          <div>
            <p className="mb-[10px] whitespace-nowrap text-[0.8rem] text-[rgb(136,136,136)] dark:text-gray-400">
              Current Value
              <span className="ml-[5%] inline text-[0.9rem] text-[rgb(100,100,100)] dark:text-gray-200">
                31.43k
              </span>
            </p>

            <p className="whitespace-nowrap text-[0.8rem] text-[rgb(136,136,136)] dark:text-gray-400">
              Investment
              <span className="ml-[5%] inline text-[0.9rem] text-[rgb(100,100,100)] dark:text-gray-200">
                29.88k
              </span>
            </p>
          </div>
        </div>

        <SectionLine />
      </div>
    </>
  );
};

export default Summary;

function SectionLine() {
  return (
    <hr className="mt-[20px] mb-[5%] h-[1px] border-none bg-gray-300 dark:bg-gray-700" />
  );
}

function SectionHeading({ heading }: { heading: string }) {
  return (
    <span className="mb-[2%] flex items-center">
      <p className="inline-block text-[1.2rem] font-light text-[rgb(71,71,71)] dark:text-gray-200">
        {heading}
      </p>
    </span>
  );
}