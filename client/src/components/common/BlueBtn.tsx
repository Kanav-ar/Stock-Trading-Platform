export default function BlueBtn({tag}:{tag:string}) {
  return (
    <>
      <button className="bg-[#387ed1] rounded hover:bg-blue-900 cursor-pointer text-xl text-white px-8 py-2">
        {tag}
      </button>
    </>
  );
}