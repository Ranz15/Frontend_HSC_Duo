import { useState } from "react";
import NavCategory from "../Fragments/hamburgerMenu";
import NavBar from "../Fragments/navBar";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const handleClick = (e) => {
    navigate(`/product`);
    console.log(state);
  };
  const images = [
    { image: "./public/Images/Landing-page-assets/men-landing-page2.jpg" },
    { image: "./public/Images/Landing-page-assets/ladies-landing-page.jpg" },
    { image: "./public/Images/Landing-page-assets/kids-landing-page.jpg" },
  ];
  return (
    <div>
      <NavBar />
      <div className="mx-7 sm:mx-5">
        <div className=" flex flex-col justify-center items-center">
          {images.map((e) => (
            <div className="my-5">
              <img
                src={e.image}
                alt=""
                className="shadow-md"
                onClick={handleClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
