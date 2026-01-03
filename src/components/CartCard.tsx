import { useState } from "react";
import { Container, Card, Button, Stack, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import type { Product } from "../redux/cartSlice";

function CartCard (productInfo: Product) {
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
        <Card style={{}} className="mb-3">
            <Container>
                <Row>
                    <Col xs={2}>
                        <img src={productInfo.image} alt={`${productInfo.title} product image`} style={{ width: "50px", }}/>
                    </Col>
                    <Col xs={8}>
                        <h4 >{productInfo.title}</h4>
                        <p><b>Item Cost: ${productInfo.price.toFixed(2)}</b></p>
                    </Col>               
                    <Col xs={2}>
                        <p><b>Total Cost: ${(productInfo.price * quantity).toFixed(2)}</b></p>
                        {quantity <= 0 ? 
                            (
                                <div></div>
                            )
                            :
                            (
                                <Stack direction="horizontal" gap={2}>
                                    <Button onClick={() => handleRemoveFromCart(productInfo.id)}>-</Button>
                                    <span>Quantity: {quantity}</span>
                                    <Button onClick={() => handleAddToCart(productInfo)}>+</Button>
                                </Stack>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CartCard;
