import { useState } from "react";

const ProductPria = () => {
  return (
    <ul className="ml-5">
      <li>T-Shirt</li>
      <li>Shirt</li>
      <li>Hood</li>
      <li>Shoes</li>
    </ul>
  );
};

const ProductLadies = () => {
  return (
    <ul className="ml-5">
      <li>T-Shirt</li>
      <li>Shirt</li>
      <li>Sweatshirt</li>
      <li>Shoes</li>
    </ul>
  );
};

const ProductKids = () => {
  return (
    <ul className="ml-5">
      <li>T-Shirt</li>
      <li>Shirt</li>
      <li>Sweatshirt</li>
      <li>Shoes</li>
    </ul>
  );
};

const Category = () => {
  const [menOnclick, setMenOnclick] = useState(false);
  const [ladiesOnclick, setLadiesOnclick] = useState(false);
  const [kidsOnclick, setKidsOnclick] = useState(false);
  // const [sportOnclick, setSportOnclick] = useState(false);
  return (
    <ul className="bg-[#e4e4e4] px-3  p-2">
      <li
        onClick={() => {
          setMenOnclick(!menOnclick);
          ladiesOnclick ? setMenOnclick(!menOnclick) : menOnclick;
        }}
      >
        Men
      </li>
      {menOnclick ? <ProductPria /> : ""}

      <li
        onClick={() => {
          setLadiesOnclick(!ladiesOnclick);
        }}
      >
        Ladies
      </li>
      {ladiesOnclick ? <ProductLadies /> : ""}

      <li
        onClick={() => {
          setKidsOnclick(!kidsOnclick);
        }}
      >
        Kids
      </li>
      {kidsOnclick ? <ProductKids /> : ""}
    </ul>
  );
};

const NavCategory = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="">
        <span
          onClick={() => setActive(!active)}
          className="w-5 h-2 bg-black rounded-md "
        >
          s
        </span>
        {active ? <Category /> : ""}
      </div>
      <div></div>
    </div>
  );
};

export default NavCategory;
