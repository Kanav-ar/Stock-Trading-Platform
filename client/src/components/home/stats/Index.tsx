import StatInfo from "./StatInfo";
import ecoSystem from "../../../assets/ecosystem.png";
import ecoSystemDarkMode from "../../../assets/ecosystem-dm.png";
import useTheme from "../../../context/Theme/themeContext";
import ArrowLink from "../../common/ArrowLink";

export default function Stats() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col gap-12 flex-1">
          <h1 className="text-3xl font-semibold md:mb-4">
            Trust with Confidence
          </h1>
          <StatInfo
            title="Customer-first always"
            description="That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India."
          />
          <StatInfo
            title="No spam or gimmicks"
            description={<>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a className="text-[#387ed1] hover:text-black dark:hover:text-gray-300" href="">Our philosophies.</a></>}
          />
          <StatInfo
            title="The Zerodha universe"
            description="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
          />
          <StatInfo
            title="Do better with money"
            description={<>With initiatives like <a className="text-[#387ed1] hover:text-black dark:hover:text-gray-300" href="">Nudge</a> and <a className="text-[#387ed1] hover:text-black dark:hover:text-gray-300" href="">Kill Switch</a> , we don't just facilitate transactions, but actively help you do better with your money.</>}
          />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center md:rounded-full md:px-4 lg:px-8  py-10">
          <img
            className="rounded"
            src={theme === "dark" ? ecoSystemDarkMode : ecoSystem}
            alt="ecosystem"    
          />
          <div className="flex gap-4 lg:gap-8">
            <ArrowLink tag="Explore our products" link={""} />
            <ArrowLink tag="Try kite demo" link={""} />
          </div>
        </div>
      </div>
    </>
  );
}
