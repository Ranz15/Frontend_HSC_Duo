import { useEffect, useState } from "react";
import NavBar from "../../Fragments/navBarUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../Elements/Skeleton/skeleton";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:3030/product/all");
      setIsLoading(false);
      if (data) {
        console.log(data.data);
        setProducts(data.data);
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
    <div className="max-w-full ">
      <NavBar />
      <div className="flex ">
        {isLoading && <Skeleton cards={30} />}
        {products.map((product) => (
          <div className="mx-5 mt-20">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap justify-center gap-5 sm:gap-20 lg:grid lg:grid-cols-3 lg:mx-14">
          {isLoading && <Skeleton cards={30} />}
          {products.map((product) => (
            <div className="">
              <span>{product.description}</span>
              <img
                src={product.thumbnail}
                alt=""
                className="w-44 h-64 shadow-lg border-2 lg:w-80 lg:h-96"
                onClick={() => {
                  productDetail(product.id);
                  console.log(product.id);
                }}
              />
            </div>
          ))}
        </div> */}
    </div>
  );
};
export default Product;
