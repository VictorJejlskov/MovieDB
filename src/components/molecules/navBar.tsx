import { useRouter } from "next/router";
import NavMenuButton from "../atoms/navMenuButton";
import ProfileIconButton from "../atoms/profileIconButton";
import SearchButton from "../atoms/searchButton";
import { useEffect } from "react";
import { themeChange } from "theme-change";

interface NavBarProps {
  imgPath: string;
}
const NavBar = (props: NavBarProps) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const router = useRouter();
  const { imgPath } = props;
  return (
    <div className="navbar sticky top-0 z-50 z-50 border-b-2 border-secondary bg-primary-focus text-primary-content">
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
