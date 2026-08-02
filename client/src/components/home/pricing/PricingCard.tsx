export default function PricingCard({
  image,
  tag,
}: {
  image: string;
  tag: string;
}) {
  return (
    <>
      <div className="flex items-center">
        <img src={image} alt="pricing image" className="h-20 lg:h-24 xl:h-28" />
        <p className="md:text-xs">{tag}</p>
      </div>
    </>
  );
}
