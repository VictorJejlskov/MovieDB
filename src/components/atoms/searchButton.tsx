import { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
const SearchButton = () => {
  const [searchToggled, setSearchToggled] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (ref.current !== null) {
      ref.current.blur();
      setSearchToggled(!searchToggled);
    }
  };

  return (
    <div className="flex">
      <div className="">
        <input
          type="text"
          ref={ref}
          className={
            searchToggled
              ? "w-0"
              : "input-primary input mr-1 max-h-[80%] w-80 transition-all duration-[500ms] ease-out"
          }
          placeholder="search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button
          className={
            searchToggled
              ? "w-0"
              : "btn-primary btn mr-3 h-12 transition-all duration-[500ms] ease-out"
          }
          onClick={() => {
            router.push({
              pathname: "search",
              query: { term: searchTerm },
            });
          }}
        >
          {searchToggled ? "" : "Go!"}
        </button>
      </div>

      <button
        className="btn-ghost btn-circle btn"
        onClick={() => {
          handleClick();
        }}
      >
        <MagnifyingGlassIcon width={25} />
      </button>
    </div>
  );
};
export default SearchButton;
