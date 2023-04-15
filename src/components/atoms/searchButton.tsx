import { useState } from "react";

const SearchButton = () => {
  const [searchToggled, setSearchToggled] = useState(false);

  return (
    <div>
      <input
        type="text"
        className={
          searchToggled
            ? "w-0"
            : "w-80 transition-all duration-[600ms] ease-out"
        }
        onBlur={() => {
          setSearchToggled(!searchToggled);
        }}
      />
      <button
        className="btn-ghost btn-circle btn"
        onClick={() => {
          setSearchToggled(!searchToggled);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};
export default SearchButton;
