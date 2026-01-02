import { createContext }  from "react";
import type { Product } from "../types/Product";

interface ShoppingCartContextType {
    shoppingCart: Product[]
    totalCost: number
    setShoppingCart: (products: Product[]) => void;
    setTotalCost: (products: Product[]) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({
    shoppingCart: [],
    totalCost: 0,
    setShoppingCart: () => {},
    setTotalCost: () => {},
})

export default ShoppingCartContext;
