import educationVarsity from "../../../assets/education.svg";
import EduInfo from "./EduInfo";

export default function Education() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-7 md:flex-row md:justify-around items-center">
        <div className="flex block md:hidden justify-start w-full">
          <h1 className="text-3xl font-semibold">
            Free and open market education
          </h1>
        </div>
        <div>
          <img src={educationVarsity} alt="Varsity image" />
        </div>
        <div className="flex flex-col gap-12">
          <h1 className="text-3xl hidden md:block font-semibold">
            Free and open market education
          </h1>

          <div className="flex flex-col md:max-w-lg gap-8">
            <EduInfo
              description={
                "Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
              }
              linkText={"Varsity"}
              link=""
            />
            <EduInfo
              description={
                "TradingQ&A, the most active trading and investment community in India for all your market related queries."
              }
              linkText={"TradingQ&A"}
              link=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
