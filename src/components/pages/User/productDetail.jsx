import { useState, useEffect } from "react";
import ButtonBuy from "../../Elements/Button/ButtonBuy";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import NavBar from "../../Fragments/navBarUser";
import Button from "../../Elements/Button/Button";

const ProductDetail = () => {
  const [buy, setBuy] = useState(0);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProductById = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      if (data) {
        console.log(data);
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleClick = () => {
    setBuy(console.log("Saya di klik"));
    localStorage.setItem("product", product.id);
    navigate("/transaction");
  };
  return (
    <div>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col sm:flex-row ">
          <img
            src="../public/Images/Men-assets/Shirt/1a.jpg"
            className=" rounded-2xl shadow-2xl w-64 lg:w-96 lg:shadow-xl xl:mr-5 "
          />
          <div className="flex flex-col lg:text-xl">
            <h1 className="text-2xl font-bold lg:mb-5 lg:text-5xl">
              {product.brand}
            </h1>
            <span className="block xl:text-xl">Price: {product.price}</span>
            <span className="block xl:text-xl">Stock: {product.stock}</span>
            <div className="py-3">
              <Button
                width={
                  "w-full sm:w-full lg:w-3/4 xl:w-full lg:h-12 xl:text-2xl"
                }
                onClick={() => {
                  navigate("/user/transaction");
                }}
              >
                Buy Now
              </Button>
            </div>
            <p className="xl:text-xl">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
