import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import MenuBar from "./MenuBar";
import ShoppingCartContext from "../context/ShoppingCartContext";
import CartCard from "./CartCard";

function ShoppingCart () {
    const { shoppingCart } = useContext(ShoppingCartContext);
    
    const productList = new Set();
    const uniqueProducts = shoppingCart.filter(product => {
        const inList = productList.has(product.id);
        productList.add(product.id);
        return !inList;
    });

    const totalCost = shoppingCart.reduce((total, product) => total + product.price, 0);

    return(
        <>
            <div>
                <MenuBar />
                <h1>Your Shopping Cart</h1>
                <p>Review the products below and check out when you're ready!</p>
                <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
            </div>
            <Container style={{}}>
                <Row style={{}}>
                    {uniqueProducts?.map(product => (
                        <CartCard {...product} />
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ShoppingCart;
