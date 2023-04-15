import NavMenuButton from "../atoms/navMenuButton";
import ProfileIconButton from "../atoms/profileIconButton";
import SearchButton from "../atoms/searchButton";

interface NavBarProps {
  imgPath: string;
}
const NavBar = (props: NavBarProps) => {
  const { imgPath } = props;
  return (
    <div className="navbar sticky top-0 z-50 bg-base-400">
      <div className="navbar-start">
        <NavMenuButton />
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">MovieFinder</a>
      </div>
      <div className="navbar-end">
        <SearchButton />
        <ProfileIconButton path={imgPath} />
      </div>
    </div>
  );
};
export default NavBar;
