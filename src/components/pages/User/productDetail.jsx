import { useState, useEffect } from "react";
import ButtonBuy from "../../Elements/Button/ButtonBuy";
import { useParams } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import NavBar from "../../Fragments/navBarAdmin";

const ProductDetail = () => {
  const [buy, setBuy] = useState(0);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getProductById = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      if (data) {
        console.log(data);
        setProducts(data);
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
  };
  return (
    <div>
      <NavBar />
      <div className="max-w-none text-lg m-5 sm:m-7 ">
        <div className="flex flex-col ">
          <div className=" flex flex-row overflow-x-scroll my-5 border-2 shadow-md">
            {/* we got problem in here 😒 */}
            <img
              src="https://i.kym-cdn.com/photos/images/newsfeed/002/486/154/c06.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col text-lg">
            <h3 className="font-bold 2">{products.brand}</h3>
            <span className="font-medium">{products.price}</span>
            <span className="text-xs">{products.stock}</span>
          </div>
          <div className="flex flex-col justify-evenly gap-2 mt-2 mb-3 ">
            <ButtonBuy onClick={handleClick}>BELI SEKARANG</ButtonBuy>
            {/* <Button onClick={handleClick}>CHECKOUT</Button> */}
          </div>
          <span className="text-sm text-justify">{products.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
