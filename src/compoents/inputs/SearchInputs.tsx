import { useState, useEffect } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { useDebounce } from "../../lib/hooks/useDebounce/useDebounce";
import type { SearchProps } from "../headers/headers-types/HeadersTypes";

const SearchInputs = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: SearchProps) => {
  const [inputValue, setInputValue] = useState(value);

  const debouncedValue = useDebounce(inputValue, 400);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div
      className={`flex items-center bg-white border border-gray-300 rounded-sm px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all ${className}`}
    >
      <IoSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 outline-none bg-transparent text-sm"
      />
      {inputValue && (
        <button
          onClick={() => onChange("")}
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <IoClose />
        </button>
      )}
    </div>
  );
};

export default SearchInputs;
