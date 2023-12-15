import { useState } from "react";
import ButtonBuy from "../Elements/Button/ButtonBuy";

const images = [
  {
    image:
      "https://hm-media-prod.s3.amazonaws.com/pub/media/catalog/product/medium/1dacdd4db2da36eb1bf34ec531c6150f216e1055_xxl-1.jpg",
  },
  {
    image:
      "https://hm-media-prod.s3.amazonaws.com/pub/media/catalog/product/medium/1dacdd4db2da36eb1bf34ec531c6150f216e1055_xxl-1.jpg",
  },
  {
    image:
      "https://hm-media-prod.s3.amazonaws.com/pub/media/catalog/product/medium/1dacdd4db2da36eb1bf34ec531c6150f216e1055_xxl-1.jpg",
  },
];

const ProductDetail = () => {
  const [buy, setBuy] = useState(0);

  const handleClick = () => {
    setBuy(console.log("Saya di klik"));
  };
  return (
    <div>
      <div className="max-w-none text-lg m-5 sm:m-7 ">
        <div className="flex flex-col ">
          <div className=" flex flex-row overflow-x-scroll my-5 border-2 shadow-md">
            {images.map((e) => (
              <img src={e.image} alt="" />
            ))}
          </div>
          <div className="flex flex-col text-lg">
            <h3 className="font-bold 2">Lorem ipsum dolor sit amet.</h3>
            <span className="font-medium">Rp 1.000.000</span>
            <span className="text-xs">QTY: 3</span>
          </div>
          <div className="flex flex-col justify-evenly gap-2 mt-2 mb-3 ">
            <ButtonBuy onClick={handleClick}>BELI SEKARANG</ButtonBuy>
            {/* <Button onClick={handleClick}>CHECKOUT</Button> */}
          </div>
          <span className="text-sm text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            neque possimus sunt assumenda. Molestiae excepturi quisquam ab.
            Fuga, veniam delectus!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
