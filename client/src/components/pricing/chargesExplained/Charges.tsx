import TableHeading from "../common/TableHeading";
import { leftCharges, rightCharges } from "./ChargesData";

export default function Charges() {
  return (
    <>
      <div>
        <TableHeading heading="Charges Explained" />
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <ChargeArray array={leftCharges} />
          <ChargeArray array={rightCharges} />
        </div>
        <div>
          <h4 className="text-lg mt-8 mb-4">Disclaimer</h4>
          <p className="text-xs text-gray-500">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </>
  );
}

type ChargesArray = {
  title: string;
  description: string[];
};
function ChargeArray({ array }: { array: ChargesArray[] }) {
  return (
    <div className="flex flex-col gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl">
      {array.map((charge) => (
        <div key={charge.title}>
          <h3 className="font-bold mb-4">{charge.title}</h3>
          <p>
            {charge.description.map((line, index) => (
              <div key={index} className="mb-4 text-gray-500 text-xs ">
                {line}
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
