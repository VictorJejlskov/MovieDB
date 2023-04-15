import NavMenuButton from "../atoms/navMenuButton";
import ProfileIconButton from "../atoms/profileIconButton";
import SearchButton from "../atoms/searchButton";

const NavBar = () => {
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
        <ProfileIconButton />
      </div>
    </div>
  );
};
export default NavBar;
