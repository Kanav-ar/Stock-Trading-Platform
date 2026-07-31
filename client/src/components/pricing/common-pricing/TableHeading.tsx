type TableHeading = {
    heading : string
}
export default function TableHeading({heading}:TableHeading) {
  return (
    <h1 className="font-semibold text-3xl">{heading}</h1>
  );
}