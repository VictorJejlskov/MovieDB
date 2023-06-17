import { useRouter } from "next/router";

const NavMenuButton = () => {
  const router = useRouter();
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
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
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        //CHANGE
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <button onClick={() => void router.push("/dashboard")}>
            Dashboard
          </button>
        </li>
        <li>
          <button onClick={() => void router.push("/upcoming")}>
            Upcoming
          </button>
        </li>
        <li>
          <button onClick={() => void router.push("/favourites")}>
            Favourites
          </button>
        </li>
        <li>
          <button onClick={() => void router.push("/trending")}>
            Trending
          </button>
        </li>
        <li>
          <button onClick={() => void router.push("/nowplaying")}>
            Now Playing
          </button>
        </li>
      </ul>
    </div>
  );
};
export default NavMenuButton;
