type PricingCard = {
  img: string;
  heading: string;
  text: string;
};

export default function PricingCard({ img, heading, text }: PricingCard) {
  return (
    <>
      <div className="flex flex-col gap-4 items-center transition-all">
        <div className="flex justify-center">
          <img className="h-35 md:h-45" src={img} alt="pricing image" />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 justify-center text-center max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold">{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
