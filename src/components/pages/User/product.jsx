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
      const { data } = await axios.get("https://dummyjson.com/products");
      setIsLoading(false);
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
    <div className="max-w-full ">
      <NavBar />
      <h1 className="hidden sm:flex sm:flex-row justify-end mr-5 uppercase text-xl font-bold py-3">
        All Categories
      </h1>
      <div className="flex flex-wrap gap-y-10 gap-x-10 justify-center mt-5">
        {isLoading && <Skeleton cards={30} />}
        {products.map((product) => (
          <div className=" flex flex-row justify-center items-center ">
            <div className="card bg-base-200 w-72 h-96 shadow-lg ">
              <div className="card-body mx-auto overflow-hidden">
                <figure className="flex flex-row mx-auto">
                  <img
                    className="object-fill h-56 rounded-lg"
                    src={product.thumbnail}
                    alt="Shoes"
                    onClick={() => {
                      productDetail(product.id);
                      console.log(product.id);
                    }}
                  />
                </figure>
                <div className="flex flex-col justify-center gap-0 ">
                  <h2 className="card-title">{product.title}</h2>
                  <p>Price: {product.price}</p>
                  <p>Stock: {product.stock}</p>
                </div>
              </div>
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
