import React, { useEffect, useState } from "react";
import { ProductsType } from "../interfaceTypes/productsType";
import axios from "axios";
import { Product } from "./Product";

export const Products = () => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const resData = await axios.get<ProductsType[]>(
        "https://fakestoreapi.com/products"
      );
      setData(resData.data);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(data);

  return (
    <div>
      <h1>Products</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      {data && data.map((data) => <Product data={data} key={data.id} />)}
    </div>
  );
};
