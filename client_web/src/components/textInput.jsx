import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";

export const AuthTextCustomInput = ({
  placeholderText,
  valueText,
  setValueText,
  type = "text",
}) => (
  <input
    type={type}
    className="border border-descriptiveText font-Quicksandmedium text-descriptiveText rounded-button w-full py-5 pl-4 outline-none focus:border-primary"
    placeholder={placeholderText}
    value={valueText}
    onChange={(e) => setValueText(e.target.value)}
  />
);

export const AuthPasswordCustomInput = ({
  placeholderText,
  valueText,
  setValueText,
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <div className="relative w-full">
      <input
        type={secureText ? "password" : "text"}
        className="border border-descriptiveText font-Quicksandmedium text-descriptiveText rounded-button w-full py-5 pl-4 pr-12 outline-none focus:border-primary"
        placeholder={placeholderText}
        value={valueText}
        onChange={(e) => setValueText(e.target.value)}
      />
      <button
        type="button"
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
        onClick={() => setSecureText(!secureText)}
        aria-label={secureText ? "Show password" : "Hide password"}
      >
        {secureText ? <IoEyeOff size={24} /> : <IoEye size={24} />}
      </button>
    </div>
  );
};
