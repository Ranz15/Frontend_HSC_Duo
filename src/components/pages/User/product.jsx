import { useEffect, useState } from "react";
import NavBar from "../../Fragments/navBarAdmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Category from "../../Fragments/category";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      if (data) {
        console.log(data.products);
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const productDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      <Category />
      <div className="mx-5 mt-20 ">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <div className="grid grid-cols-2 justify-center gap-5">
          {products.map((product) => (
            <div className=" ">
              <img
                src={product.images[0]}
                alt=""
                className="w-44 h-64 "
                onClick={() => {
                  productDetail(product.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
