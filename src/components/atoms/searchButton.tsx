import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchButton = () => {
  const [searchToggled, setSearchToggled] = useState(true);

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
        <MagnifyingGlassIcon width={25} />
      </button>
    </div>
  );
};
export default SearchButton;
