import { Link } from "react-router";

interface TermCheckboxProps {
    checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function TermsCheckbox({ checked, onChange }: TermCheckboxProps) {
  return (

      <div className="flex items-start gap-3">
        <input
          id="terms"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#387ed1] focus:ring-[#387ed1]"
          required
        />

        <label
          htmlFor="terms"
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          I agree to the{" "}
          <Link to="/#" className="font-medium text-[#387ed1] hover:underline">
            Terms and Conditions
          </Link>
        </label>
      </div>
    
  );
}
