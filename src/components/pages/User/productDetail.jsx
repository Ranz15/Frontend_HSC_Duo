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
        <div className="hero-content flex-col sm:flex-row xl:max-w-4xl">
          <img
            src="../public/Images/Men-assets/Shirt/1a.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-60 xl:w-72"
          />
          <div className="flex flex-col sm:">
            <h1 className="text-2xl font-bold">{product.brand}</h1>
            <span className="block">Price: {product.price}</span>
            <span className="block">Stock: {product.stock}</span>
            <div className="py-3">
              <Button
                width={"w-full sm:w-1/2"}
                onClick={() => {
                  navigate("/user/transaction");
                }}
              >
                Buy Now
              </Button>
            </div>
            <p className="py-6">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
