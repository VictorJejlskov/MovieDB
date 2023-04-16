import { useRouter } from "next/router";
import NavMenuButton from "../atoms/navMenuButton";
import ProfileIconButton from "../atoms/profileIconButton";
import SearchButton from "../atoms/searchButton";

interface NavBarProps {
  imgPath: string;
}
const NavBar = (props: NavBarProps) => {
  const router = useRouter();
  const { imgPath } = props;
  return (
    <div className="navbar sticky top-0 z-50 z-50 bg-base-400">
      <div className="navbar-start">
        <NavMenuButton />
        <button
          className="btn-ghost btn ml-6 text-xl normal-case"
          onClick={() => void router.push("/dashboard")}
        >
          MovieFinder
        </button>
      </div>

      <div className="navbar-end">
        <SearchButton />
        <ProfileIconButton path={imgPath} />
      </div>
    </div>
  );
};
export default NavBar;
