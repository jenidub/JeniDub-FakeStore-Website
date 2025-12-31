import { createContext }  from "react";
import type { Product } from "../types/Product";

interface ShoppingCartContextType {
    shoppingCart: Product[]
    setShoppingCart: (products: Product[]) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({
    shoppingCart: [],
    setShoppingCart: () => {}
})

export default ShoppingCartContext;
