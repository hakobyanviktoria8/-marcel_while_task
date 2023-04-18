import "./../styles/Product.css";
import { ProductsType } from "../interfaceTypes/productsType";
import { useState } from "react";

interface ProductType {
  data: ProductsType;
}

export const Product = ({ data }: ProductType) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="productCart">
      <img src={data.image} alt="img" />
      <h2>
        <mark>${data.price}</mark>
      </h2>
      <h2>{data.title}</h2>
      <button onClick={() => setToggle(!toggle)}>
        {" "}
        {!toggle ? "Show" : "Hide"} more
      </button>
      {toggle && <p>{data.description}</p>}
    </div>
  );
};
