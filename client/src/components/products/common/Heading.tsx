type ProductHeading = {
  heading: string;
};

export default function Heading({ heading }: ProductHeading) {
  return <h1 className="font-[550] text-2xl ">{heading}</h1>;
}
