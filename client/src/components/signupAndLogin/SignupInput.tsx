import type { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
    type: HTMLInputTypeAttribute;
  placeholder: string;
  value:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) {
  
  return (
    <div>
      <label
        htmlFor={label.toLowerCase()}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>

        <input
          type={type}
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          placeholder={placeholder}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none transition focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] dark:border-gray-700 dark:bg-[#111c2b] dark:text-white dark:placeholder-gray-500"
          value={value}
          onChange={onChange}
          required
        />
      
    </div>
  );
}
