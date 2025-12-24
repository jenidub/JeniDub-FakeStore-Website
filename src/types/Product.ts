import { createContext } from "react";

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
};

interface ProductCartType {
    productCart: Product[];
    setProductCart: (products: Product[]) => void;
}

const ProductCartContext = createContext<ProductCartType>({
    productCart: [],
    setProductCart: () => {}
})

export default ProductCartContext;
