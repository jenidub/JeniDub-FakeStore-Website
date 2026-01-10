import { Card, Button, Stack } from "react-bootstrap";
import type { Product } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useState } from "react";

function ProductCard (productInfo: Product) {
    const [ isExpanded ] = useState(false);
    // const [ isExpanded, setIsExpanded ] = useState(false);
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose= () => setShow(false);


    const { items } = useSelector((state: RootState) => state.shoppingCart);
    const quantity = items.filter(product => product.id === productInfo.id).length;
    
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = (newProduct: Product) => {
        dispatch(addToCart(newProduct));
    }

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
    }

    const truncatedTitle = productInfo.title.length > 20 
        ? productInfo.title.substring(0, 20)
        : productInfo.title;

    const truncatedDescription = productInfo.description.length > 100 
        ? productInfo.description.substring(0, 100) + "..."
        : productInfo.description;

    return (
        <Card style={{ 
            height: "400px",
            display: "flex", 
            flexDirection: "column",
            marginBottom: "20px",
        }}>
            <div style={{ width: "75px", display: "flex", margin: "10px auto", }}>
                <img 
                    src={productInfo.image}
                    width="100vw"
                    height="100vh"
                    alt={`${productInfo.title} product image`}
                />
            </div>
            <div>
                <h4 style={{ }}>
                    {truncatedTitle}
                </h4>
                <h5><em>Product ID: #{productInfo.id}</em></h5>
                <p><b>${productInfo.price.toFixed(2)}</b></p>
            </div>
            <div style={{ marginBottom: "10px", }}>
                <p style={{ fontSize: "0.9em", lineHeight: "1.1", marginBottom: "0.5rem" }}>
                    { isExpanded ? productInfo.description : truncatedDescription }
                    {/* {showMoreButton && (
                        <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{ 
                                padding: 0, 
                                textDecoration: "none",
                                fontSize: "0.85rem"
                            }}
                        >
                            {isExpanded ? "Show Less" : "More..."}
                        </Button>
                    )} */}
                </p>
            </div>
            <div style={{ flex: isExpanded ? "0 1 auto" : 1, margin: "10px auto", }}>
                {quantity <= 0 ? 
                    (
                        <Button onClick={() => handleAddToCart(productInfo)}>
                            Add to Cart
                        </Button>
                    )
                    :
                    (
                        <Stack direction="horizontal" gap={4}>
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
