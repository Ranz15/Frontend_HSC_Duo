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
      <div className="navbar bg-slate-300">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/admin/list">Admin</Link>
              </li>
              <li>
                <Link to="/admin/list">Category</Link>
              </li>
              <li>
                <Link to="/admin/list">Buyer</Link>
              </li>
              <li>
                <Link to="/admin/list">Product</Link>
              </li>
              <li>
                <Link to="/admin/list">Transaction</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/admin/dashboard"
            className="btn btn-ghost text-xl text-red-400"
          >
            H&M
          </Link>
        </div>
        {/* Normal Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/admin/list">Admin</Link>
            </li>
            <li>
              <Link to="/admin/category/list">Category</Link>
            </li>
            <li>
              <Link to="/admin/buyer/list">Buyer</Link>
            </li>
            <li>
              <Link to="/admin/product/list">Product</Link>
            </li>
            <li>
              <Link to="/admin/transaction/list">Transaction</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button onClick={Logout}>Logout </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
