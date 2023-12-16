import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Fragments/navBarUser";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${cekId}`
      );
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

  let cekId;
  if (id == 1) {
    cekId = "smartphones";
  } else if (id == 2) {
    cekId = "laptops";
  } else if (id == 3) {
    cekId = "home-decoration";
  }
  useEffect(() => {
    getAllProduct();
  }, [cekId]);
  return (
    <div className="max-w-full">
      <Navbar />
      <div className="mx-5 mt-20">
        <h1 className="text-2xl font-bold my-4">{cekId} Categories</h1>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-20 lg:grid lg:grid-cols-3 lg:mx-14">
          {products.map((e) => (
            <img
              key={e.id}
              src={e.images[0]}
              alt=""
              className="w-44 h-64"
              onClick={() => {
                productDetail(e.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductCategory;
