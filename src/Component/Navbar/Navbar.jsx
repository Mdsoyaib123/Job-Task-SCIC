import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../Provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  const links = (
    <div className="grid grid-cols-1 lg:flex  gap-8 font-semibold text-lg items-center  text-black">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? " font-bold text-lg text-black    " : ""
        }
      >
        <button>Home</button>
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? " font-bold text-lg text-black    " : ""
        }
      >
        <button>About</button>
      </NavLink>

      {user ? (
        <div className="  ">
          <NavLink
            to={"/dashBoard/taskManagement "}
            className={({ isActive }) =>
              isActive ? " font-bold text-lg text-black    " : ""
            }
          >
            <button className="pr-8">Dashboard </button>
          </NavLink>
          <button
            onClick={handleLogout}
            className={({ isActive }) =>
              isActive ? " font-bold text-lg text-black underline   " : ""
            }
          >
            {" "}
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex gap-8 items-center">
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? " font-bold text-lg text-black underline   " : ""
            }
          >
            <button>Login</button>
          </NavLink>
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive ? " font-bold text-lg text-black underline   " : ""
            }
          >
            <button>Register</button>
          </NavLink>
        </div>
      )}
    </div>
  );
  return (
    <div className="navbar z-10 flex justify-between items-center py-3 px-10 max-w-[2520px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[1]  shadow bg-base-100 rounded-box w-56 pl-5 pt-4 "
          >
            {links}
          </ul>
        </div>
        <Link className="hidden md:flex lg:flex" to={"/"}>
          <h1>Logo</h1>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
