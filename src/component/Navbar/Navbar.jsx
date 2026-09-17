import { MdOutlineMovieCreation } from "react-icons/md";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold"
              : "text-base-content hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold"
              : "text-base-content hover:text-primary"
          }
        >
          Movies
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
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
          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide flex justify-center items-center gap-1">
          <MdOutlineMovieCreation size={30} />
          MovieExplorer
        </Link>
      </div>

      {/* Navbar Center-Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to="/movies" className="btn btn-primary">
          Explore Movies
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
