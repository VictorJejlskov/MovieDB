const ProfileIconButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
export default ProfileIconButton;
