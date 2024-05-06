import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../AuthProbider/AuthProbider";
import { TiShoppingCart } from "react-icons/ti";


const NavBar = () => {
  //log-out
  const { user, logout } = useContext(AuthContex);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/pizza">Order Now</Link>
      </li>
      <li>
        <Link to="/secret">secret</Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn mr-4">
          <TiShoppingCart />
            <div className="badge  ">+0</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          {/* <span> {user ?. displayName }</span> */}
          <button onClick={handleLogout} className="btn btn-active btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            BISTRO BOSS <br />R e s t a u r a n t
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
