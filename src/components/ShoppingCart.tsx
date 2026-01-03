import { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import MenuBar from "./MenuBar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import CartCard from "./CartCard";
import Checkout from "./Checkout";
import { checkout } from "../redux/cartSlice";

function ShoppingCart () {
    const { items } = useSelector((state: RootState) => state.shoppingCart);
    
    const dispatch = useDispatch<AppDispatch>();

    
    const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(checkout());
        setShow(false);
    }    
    const handleShow = () => setShow(true);

    const productList = new Set();
    const uniqueProducts = items.filter(product => {
        const inList = productList.has(product.id);
        productList.add(product.id);
        return !inList;
    });

    const totalCost = items.reduce((total, product) => total + product.price, 0);

    return(
        <>
            <Container style={{}}>
                <MenuBar />
                <div>
                    <h1>Your Shopping Cart</h1>
                    <p>Review the products below and check out when you're ready!</p>
                </div>
                <div className="d-flex justify-content-center mb-5">
                    <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
                    <Button className="mx-5" variant="primary" onClick={handleShow}>
                        Checkout
                    </Button>
                </div>
            </Container>
            <Container style={{}}>
                <Row style={{}}>
                    {uniqueProducts?.map(product => (
                        <CartCard {...product} />
                    ))}
                </Row>
            </Container>
            <Container>
                {show && (
                    <Checkout show={show} handleClose={handleClose} />
                )}
            </Container>
        </>
    )
}

export default ShoppingCart;
