import { Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";
import './App.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductCatalog />} />
            <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
    )
}

export default App;
