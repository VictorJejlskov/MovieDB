import { signOut } from "next-auth/react";
import Image from "next/image";

interface ProfileIconProps {
  path: string;
}
const ProfileIconButton = (props: ProfileIconProps) => {
  const { path } = props;
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="w-10 rounded-full">
          <Image src={path} alt="Profile Icon" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <button onClick={() => void signOut()}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
export default ProfileIconButton;
