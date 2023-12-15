import HamburgerMenu from "./hamburgerMenu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-screen bg-white px-3 flex flex-row items-center shadow-sm">
      <div className="flex flex-row items-center h-16 gap-3">
        <HamburgerMenu />
        <img
          src="./public/Images/Header-assets/H&M-Logo.svg"
          alt=""
          className="w-12"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="ml-auto flex flex-row items-center justify-end h-16 gap-2">
        <img
          onClick={() => {
            navigate("/login");
          }}
          src="./public/Images/Header-assets/Person_Icon.png"
          alt=""
          className="w-7"
        />{" "}
        {/* <img
          src="./public/Images/Header-assets/Search_Icon.png"
          alt=""
          className="w-7"
        /> */}
      </div>
    </div>
  );
};
export default NavBar;
