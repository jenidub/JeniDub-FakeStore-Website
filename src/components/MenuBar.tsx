import { Container, Nav, Navbar } from 'react-bootstrap';

function MenuBar() {
  return (
    <div className='mb-5'>
        <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-between">
        <Container>
                <Navbar.Brand href="#home">The Jeni Dub Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="/">Catalog</Nav.Link>
                    <Nav.Link href="/cart">Shopping Cart</Nav.Link>
                </Nav>
        </Container>
        </Navbar>
    </div>
  );
}

export default MenuBar;
