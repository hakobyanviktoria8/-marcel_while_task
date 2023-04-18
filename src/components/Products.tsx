import { useProductsHook } from "../hooks/productsHook";
import { ErrorComp } from "./ErrorComp";
import { Loading } from "./Loading";
import { Product } from "./Product";

export const Products = () => {
  const { data, loading, error } = useProductsHook();

  return (
    <div>
      <h1>Products</h1>
      {loading && <Loading />}
      {error && <ErrorComp error={error} />}
      {data && data.map((data) => <Product data={data} key={data.id} />)}
    </div>
  );
};
