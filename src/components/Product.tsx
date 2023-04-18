import React from "react";
import { ProductsType } from "../interfaceTypes/productsType";

interface ProductType {
  data: ProductsType;
}

export const Product = ({ data }: ProductType) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};
