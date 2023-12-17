import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Fragments/navBarUser";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../../Elements/Skeleton/skeleton";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${cekId}`
      );
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
      <h1 className="hidden sm:flex sm:flex-row justify-end mr-5 uppercase text-xl font-bold py-3">
        {cekId} Categories
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
    </div>
  );
};
export default ProductCategory;
