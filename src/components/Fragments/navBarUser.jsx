import { Link, useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar bg-[#e4e4e4] font-bold text-black px-5">
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
            {/* Responsive / Burger Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black  "
            >
              <li>
                <Link to="/product/category/1">Men</Link>
              </li>
              <li>
                <Link to="/product/category/2">Ladies</Link>
              </li>
              <li>
                <Link to="/product/category/3">Kids</Link>
              </li>
              <li>
                <Link to="/user/product">All Product</Link>
              </li>
              <li>
                <Link to="/transaction">My Transaction</Link>
              </li>
            </ul>
          </div>
          <Link to={"/user/dashboard"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              className="w-10 sm:w-12 lg:ml-5"
              alt=""
            />
          </Link>
        </div>
        {/* Normal Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-xl ">
            <li className="hover:text-red-600">
              <Link to="/product/category/1">Men</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/product/category/2">Ladies</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/product/category/3">Kids</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/user/product">All Product</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/transaction">My Transaction</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button onClick={Logout}>Login</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
