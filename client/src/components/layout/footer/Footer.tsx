import FooterSubSection from "./FooterSubSection";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../../../assets/logo.svg";
import playstore from "../../../assets/googlePlayBadge.svg";
import appstore from "../../../assets/appstoreBadge.svg";

export const accountLinks = [
  { text: "Open demat account", href: "#" },
  { text: "Minor demat account", href: "#" },
  { text: "NRI demat account", href: "#" },
  { text: "HUF demat account", href: "#" },
  { text: "Commodity", href: "#" },
  { text: "Dematerialisation", href: "#" },
  { text: "Fund transfer", href: "#" },
  { text: "MTF", href: "#" },
];

export const supportLinks = [
  { text: "Contact us", href: "#" },
  { text: "Support portal", href: "#" },
  { text: "How to file a complaint?", href: "#" },
  { text: "Status of your complaints", href: "#" },
  { text: "Bulletin", href: "#" },
  { text: "Circular", href: "#" },
  { text: "Z-Connect blog", href: "#" },
  { text: "Downloads", href: "#" },
];

export const companyLinks = [
  { text: "About", href: "#" },
  { text: "Philosophy", href: "#" },
  { text: "Press & media", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Zerodha Cares (CSR)", href: "#" },
  { text: "Zerodha.tech", href: "#" },
  { text: "Open source", href: "#" },
  { text: "Referral program", href: "#" },
];

export const quickLinks = [
  { text: "Upcoming IPOs", href: "#" },
  { text: "Brokerage charges", href: "#" },
  { text: "Market holidays", href: "#" },
  { text: "Economic calendar", href: "#" },
  { text: "Calculators", href: "#" },
  { text: "Markets", href: "#" },
  { text: "Sectors", href: "#" },
  { text: "Gift Nifty", href: "#" },
];

export default function Footer() {
  return (
    <div className="text-gray-500 bg-gray-100 dark:bg-gray-950 py-8 space-y-8 transition-all duration-1000">
      <div className="flex md:flex-row flex-col md:gap-8 xl:gap-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex flex-col gap-8">
          <img className="w-50" src={logo} alt="zerodha logo" />
          <p className="text-xs">
            © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://x.com/zerodha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#387ed1]"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/zerodha.social"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#387ed1]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/zerodhaonline/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#387ed1]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/zerodha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#387ed1]"
            >
              <FaLinkedin />
            </a>
          </div>
          <hr className="md:max-w-60 text-gray-200" />
          <div className="text-xl">
            <FaYoutube />
          </div>
          <div className="flex gap-4">
            <img className="w-20 lg:w-25" src={playstore} alt="playstore" />
            <img className="w-20 lg:w-25" src={appstore} alt="appstore" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col flex-3 gap-8 lg:gap-12 xl:gap-16 lg:pt-0 lg:pb-0 pt-16 pb-8">
          <FooterSubSection heading="Account" links={accountLinks} />

          <FooterSubSection heading="Support" links={supportLinks} />

          <FooterSubSection heading="Company" links={companyLinks} />

          <FooterSubSection heading="Quick links" links={quickLinks} />
        </div>
      </div>

      <div className="flex flex-col mx-auto text-xs gap-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to complaints@zerodha.com, for DP related to
          dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>{" "}
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>{" "}
        <p>
          <a href="">Smart Online Dispute Resolution</a> |
          <a href=""> Grievances Redressal Mechanism</a>{" "}
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>{" "}
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>{" "}
        <p>
          India's largest broker based on networth as per NSE.{" "}
          <a href="">NSE broker factsheet</a>
        </p>{" "}
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers/depository participants.
          Receive information of your transactions directly from
          Exchange/Depositories on your mobile/email at the end of the day.
          Issued in the interest of investors. KYC is one time exercise while
          dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>{" "}
        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>{" "}
        <p>
          Fixed deposit products offered on this platform are third-party
          products (TPP) and are not Exchange traded products. These are offered
          through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI
          Registration No.: INZ000031633) is acting solely as a distributor for
          these products. Any disputes arising with respect to such distribution
          activity will not have access to SEBI SCORES/ODR, Exchange Investor
          Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits
          are regulated by the Reserve Bank of India (RBI).
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href="https://www.nseindia.com/"
        >
          NSE
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href="http://bseindia.com/"
        >
          BSE
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href="https://www.mcxindia.com/"
        >
          MCX
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href="https://mseindia.com/"
        >
          Terms & conditions
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href=""
        >
          Policies & procedures
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href=""
        >
          Privacy policy
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href=""
        >
          Disclosure
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href=""
        >
          For Investor's attention
        </a>
        <a className="hover:text-[#387ed1]" href="">
          Investor charter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#387ed1]"
          href=""
        >
          Sitemap
        </a>
      </div>
    </div>
  );
}
