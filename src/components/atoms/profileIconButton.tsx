import { signOut } from "next-auth/react";

interface ProfileIconProps {
  path: string;
}
const ProfileIconButton = (props: ProfileIconProps) => {
  const { path } = props;
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="w-10 rounded-full">
          <img src={path} alt="Profile Icon" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 border-2 border-primary-content bg-neutral p-2 text-neutral-content shadow"
      >
        <li>
          <div className="">
            <select
              data-choose-theme
              className="bg-neutral text-neutral-content"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="coffee">Coffee</option>
              <option value="valentine">Valentine</option>
              <option value="synthwave">Synthwave</option>
            </select>
          </div>
          <button onClick={() => void signOut()}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
export default ProfileIconButton;
