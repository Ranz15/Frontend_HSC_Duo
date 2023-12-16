import { useEffect, useState } from "react";
import Navbar from "../../Fragments/navBarUser";

const Transaction = () => {
  const [getProducts, setGetProducts] = useState(0);
  useEffect(() => {
    setGetProducts(localStorage.getItem("product"));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col mx-4">
        <span>{getProducts}</span>
      </div>
    </div>
  );
};
export default Transaction;
