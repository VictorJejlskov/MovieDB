import { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchButton = () => {
  const [searchToggled, setSearchToggled] = useState(true);
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        ref={ref}
        className={
          searchToggled
            ? "w-0"
            : "input-primary input mr-3 max-h-[80%] w-80 transition-all duration-[600ms] ease-out"
        }
        onBlur={() => {
          setSearchToggled(!searchToggled);
        }}
      />
      <button
        className="btn-ghost btn-circle btn"
        onClick={() => {
          handleClick();
          setSearchToggled(!searchToggled);
        }}
      >
        <MagnifyingGlassIcon width={25} />
      </button>
    </div>
  );
};
export default SearchButton;
