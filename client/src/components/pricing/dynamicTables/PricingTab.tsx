import { NavLink } from "react-router";

export default function PricingTab() {
  return (
    <>
      <div className="flex gap-8 text-2xl font-semibold text-[#387ed1] mb-4">
        <NavLink to={"equities"} className="hover:text-gray-700">
          Equity
        </NavLink>
        <NavLink to={"F&O"} className="md:hidden block">
          F&O
        </NavLink>
        <NavLink to={"currency"} className="hover:text-gray-700">
          Currency
        </NavLink>
        <NavLink to={"commodity"} className="hover:text-gray-700">
          Commodity
        </NavLink>
      </div>

      <hr className="text-gray-300" />
      <br />
    </>
  );
}
