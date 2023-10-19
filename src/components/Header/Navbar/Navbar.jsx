import { Link, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../../Pages/Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { id } = useParams();

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("login success"))
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="">
            <img
              src="https://i.ibb.co/1rvdbK2/logo.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
          <h2 className="md:text-2xl font-semibold ml-2 font-mono">
            Automotive
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center">
              <div className="hidden  md:flex items-center">
                <span className="mr-4">{user.email}</span>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-secondary text-white btn-sm"
              >
                Sing Out
              </button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn bg-secondary text-white btn-sm">Sing In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
