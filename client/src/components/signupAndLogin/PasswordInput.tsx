import { EyeClosed, EyeIcon } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
value: string;
onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordInput({value,onChange}: PasswordInputProps) {
   const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
      >
        Password
      </label>

      <input
        type={showPassword === true ? "text" : "password"}
        id="password"
        name="password"
        placeholder= "Enter password"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none transition focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] dark:border-gray-700 dark:bg-[#111c2b] dark:text-white dark:placeholder-gray-500"
        value={value}
        onChange={onChange}
        required
      />
      <button
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        className="dark:text-white"
      >
        {showPassword === true ? <EyeIcon /> : <EyeClosed />}
      </button>
    </div>
  );
}
