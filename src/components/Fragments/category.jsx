import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-500 w-screen h-auto">
      <ul className="mx-5">
        <li>Men</li>
        <li>Ladies</li>
        <li>Kids</li>
      </ul>
    </div>
  );
};

// const Filter = () => {
//   return (
//     <ul className="bg-slate-500 w-screen h-auto">
//       <li>T-Shirt</li>
//       <li>Shirt</li>
//       <li>Sweatshirt</li>
//       <li>Trousers</li>
//     </ul>
//   );
// };

const Category = () => {
  const [categoryClick, setCategoryClick] = useState(0);
  return (
    <div className="relative top-20 w-screen h-10 bg-[#e4e4e4] flex flex-row gap-2">
      <div>
        <div
          onClick={() => {
            setCategoryClick(!categoryClick);
          }}
        >
          Categories
        </div>
        {categoryClick ? <Categories /> : ""}
      </div>
    </div>
  );
};
export default Category;
