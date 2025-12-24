//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="/" element={<ProductCatalog />} />
        <Route path="/cart" element={<ShoppingCart />} />

        {/* <Route path="/dashboard" element={<AuthenticationGuard component={TaskDashboard} />} /> */}
        {/* <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} /> */}
        {/* <Route path="/callback" element={<CallbackPage />} /> */}
    </Routes>
  )
}

export default App
