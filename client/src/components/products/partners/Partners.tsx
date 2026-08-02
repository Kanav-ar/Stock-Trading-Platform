import HeadingProducts from "../common/Heading";
import PartnerIcon from "./PartnerIcons";
import ZerodhaFundHouseImg from "../../../assets/zerodhaFundhouse.png";
import ZerodhaFundHouseImgDm from "../../../assets/zerodhafundhouse-dm.png";
import SensibullImg from "../../../assets/sensibullLogo.svg";
import StreakImg from "../../../assets/streakLogo.png";
import StreakImgDm from "../../../assets/streak-logo-dm.png";
import SmallcaseImg from "../../../assets/smallcaseLogo.png";
import TijoriImg from "../../../assets/tijori.svg";
import TijoriImgDm from "../../../assets/tijori-dm.png";
import DittoImg from "../../../assets/dittoLogo.png";
import DittoImgDm from "../../../assets/ditto-logo-dm.png";
import useTheme from "../../../context/Theme/themeContext";

export default function Partners() {
  const { theme } = useTheme();
  return (
    <>
      <div>
        <div className="text-center flex flex-col gap-8 mb-16">
          <HeadingProducts heading="The Zerodha Universe" />
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 mt-12">
          <PartnerIcon
            img={
              theme === "light" ? ZerodhaFundHouseImg : ZerodhaFundHouseImgDm
            }
            text="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
          />
          <PartnerIcon
            img={SensibullImg}
            text="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
          />
          <PartnerIcon
            img={theme === "light" ? TijoriImg : TijoriImgDm  }
            text="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
          />
          <PartnerIcon
            img={theme === "light" ? StreakImg : StreakImgDm}
            text="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
          />
          <PartnerIcon
            img={SmallcaseImg}
            text="Systematic trading platform that allows you to create and backtest strategies without coding."
          />
          <PartnerIcon
            img={theme === "light" ? DittoImg : DittoImgDm}
            text="Personalized advice on life and health insurance. No spam and no mis-selling."
          />
        </div>
      </div>
    </>
  );
}
