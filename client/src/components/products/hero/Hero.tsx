import ArrowLink from "../../common/ArrowLink";

export default function HeroProducts({}) {
  return (
    <>
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">Zerodha Products</h1>
        <p className="text-2xl">Sleek, modern, and intuitive trading platforms</p>
        </div>
        <p>
          Check out our  <ArrowLink tag="investment offerings" link="" />
        </p>
      </div>
    </>
  );
}
