import { Container, Nav, Navbar } from 'react-bootstrap';
import ShoppingCartContext from '../context/ShoppingCartContext';
import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';

function MenuBar() {
    const { shoppingCart } = useContext(ShoppingCartContext);
    const totalCost = shoppingCart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-between mb-5">
                <Container>
                    <Navbar.Brand href="#home">The Jeni Dub Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href="/">Catalog</Nav.Link>
                        <Nav.Link href="/cart">Shopping Cart</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/cart">
                            <BsCart4 size={30} style={{ color: 'white', marginRight: "10px", }} />
                        </Nav.Link>
                        <Navbar.Text>
                            <span>{shoppingCart.length} Items | ${totalCost.toFixed(2)}</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuBar;
