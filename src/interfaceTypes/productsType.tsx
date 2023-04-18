export interface ProductsType {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}
