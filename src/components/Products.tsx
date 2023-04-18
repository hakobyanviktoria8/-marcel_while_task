import { useProductsHook } from "../hooks/useProductsHook";
import { ErrorComp } from "./ErrorComp";
import { Loading } from "./Loading";
import { Product } from "./Product";
import "./../styles/Products.css";

export const Products = () => {
  const { data, loading, error } = useProductsHook();

  return (
    <>
      <h1>Products</h1>
      <div className="Products">
        {loading && <Loading />}
        {error && <ErrorComp error={error} />}
        {data && data.map((data) => <Product data={data} key={data.id} />)}
      </div>
    </>
  );
};
