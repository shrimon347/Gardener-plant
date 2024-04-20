import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { AuthContext } from "../../authproviders/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout().then().catch();
  };
  const handletoChangeProfile = () => {};
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "text-white underline underline-offset-8 hover:!bg-green-900"
              : "hover:!bg-green-900 !text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending hover:!bg-green-900 !text-white"
              : isActive
              ? "text-white underline underline-offset-8 hover:bg-green-900"
              : "hover:!bg-green-900 text-white"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending hover:!bg-green-900 !text-white"
              : isActive
              ? "text-white underline underline-offset-8 hover:bg-green-900"
              : "hover:!bg-green-900 text-white"
          }
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white underline underline-offset-8 hover:bg-green-900"
              : "hover:!bg-green-900 !text-white"
          }
          to="/learn"
        >
          Learn
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-green-900">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-green-900">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ??
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-green-100 text-green-900 rounded-box w-52"
              >
                <li>
                  <a className="text-green-900 font-bold">{user?.displayName??"John Newton"}</a>
                </li>
                <li>
                  <Link to="/update-profile">
                    <button onClick={handletoChangeProfile} className="">
                      Profile
                    </button>
                  </Link>
                </li>
                
                <li>
                  <button onClick={handleSignOut} className="">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn text-green-900 hover:bg-green-100  bg-green-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
