import { useState } from "react";
import { Card, Button, Stack } from "react-bootstrap";
import type { Product } from "../redux/cartSlice";

// import ShoppingCartContext from "../context/ShoppingCartContext";
// import type { Product } from "../types/Product";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";

function ProductCard (productInfo: Product) {
    const { shoppingCart } = useSelector((state: RootState) => state.shoppingCart);
    const [ quantity, setQuantity ] = useState(shoppingCart.filter(product => product.id === productInfo.id).length || 0);
    
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = (newProduct: Product) => {
        dispatch(addToCart(newProduct));
        setQuantity(quantity + 1);
    }

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
        setQuantity(quantity - 1);
    }

    return (
        <Card style={{height: "600px"}}>
            <img src={productInfo.image} alt={`${productInfo.title} product image`} style={{margin: "0 auto", width: "50px", }}/>
            <h4>{productInfo.title}</h4>
            <h5><em>Product ID: #{productInfo.id}</em></h5>
            <p><b>${productInfo.price.toFixed(2)}</b></p>
            <p>{productInfo.description}</p>                                
            <div>
                {quantity <= 0 ? 
                    (
                        <Button onClick={() => handleAddToCart(productInfo)}>
                            Add to Cart
                        </Button>
                    )
                    :
                    (
                        <Stack direction="horizontal" gap={2}>
                            <Button onClick={() => handleRemoveFromCart(productInfo.id)}>-</Button>
                            <span>Quantity in Cart: {quantity}</span>
                            <Button onClick={() => handleAddToCart(productInfo)}>+</Button>
                        </Stack>
                    )
                }
            </div>
        </Card>
    )
}

export default ProductCard;
