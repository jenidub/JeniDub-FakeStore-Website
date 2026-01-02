import { useState, useContext } from "react";
import { Card, Button, Stack } from "react-bootstrap";
import ShoppingCartContext from "../context/ShoppingCartContext";
import type { Product } from "../types/Product";

function ProductCard (productInfo: Product) {
    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
    const [ quantity, setQuantity ] = useState(shoppingCart.filter(product => product.id === productInfo.id).length || 0);

    const handleAddToCart = (productInfo: Product) => {
        setShoppingCart([...shoppingCart, productInfo]);
        setQuantity(quantity + 1);
    }

    const handleRemoveFromCart = (productId: number) => {
        const itemIndex = shoppingCart.findIndex(product => product.id === productId);
        if (itemIndex > -1) {
            const updatedCart = [...shoppingCart];
            updatedCart.splice(itemIndex, 1);
            console.log("updatedCart: ", updatedCart);
            setShoppingCart(updatedCart);
            setQuantity(quantity - 1);
        }
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
