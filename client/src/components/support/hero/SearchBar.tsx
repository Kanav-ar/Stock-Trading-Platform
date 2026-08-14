import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="bg-white rounded border border-gray-300 w-full h-14 flex pl-4 gap-2 dark:text-gray-800">
      <span className="flex items-center justify-center text-2xl">
        <BiSearchAlt2 />
      </span>
      <input
        className=" w-full border-none px-2 py-4 outline-none  focus:ring-0"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
