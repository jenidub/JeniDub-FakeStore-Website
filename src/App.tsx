import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartContext from "./context/ShoppingCartContext";
// import type { Product } from "./types/Product";
import './App.css'

function App() {
    const [ shoppingCart, setShoppingCart ] = useState(() => {
        const currentCart = window.sessionStorage.getItem('shoppingCart') || "";

        if (currentCart && currentCart !== "undefined" && currentCart !== "null") {
            return JSON.parse(currentCart)
        }
        return [];
    });

    useEffect(() => {
        console.log("updating cart...")
        window.sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
            <Routes>
                <Route path="/" element={<ProductCatalog />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </ShoppingCartContext.Provider> 
    )
}

export default App;
