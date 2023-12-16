import { useState } from "react";
import NavBar from "../../Fragments/navBarUser";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const handleClick = (e) => {
    navigate(`/product/category/${e}`);
    console.log(state);
  };
  const images = [
    {
      id: 1,
      src: "../public/Images/Landing-page-assets/men-landing-page2.jpg",
    },
    {
      id: 2,
      src: "../public/Images/Landing-page-assets/ladies-landing-page.jpg",
    },
    {
      id: 3,
      src: "../public/Images/Landing-page-assets/kids-landing-page.jpg",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="mx-7 sm:mx-10 ">
        <div className=" flex flex-col justify-center items-center">
          {images.map((e) => (
            <div className="my-5 sm:w-2/3">
              <img
                src={e.src}
                alt=""
                className="shadow-md"
                onClick={() => {
                  handleClick(e.id);
                }}
              />
            </div>
          ))}
          <div className="my-5 sm:w-2/3">
            <img
              src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/11/W50-Homepage-Ladies-Men-Divided-Kids-Bhs-Holiday.jpg"
              alt=""
              className="shadow-md"
              onClick={() => {
                navigate("/user/product");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
