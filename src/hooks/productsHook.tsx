import { useEffect, useState } from "react";
import { ProductsType } from "../interfaceTypes/productsType";
import axios from "axios";

export function useProductsHook() {
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

  return { data, loading, error };
}
