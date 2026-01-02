import { useState, useContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Dropdown, DropdownButton, Container, Row, Col } from "react-bootstrap";
import type { Product } from "../types/Product";
import ShoppingCartContext from "../context/ShoppingCartContext";
import MenuBar from "./MenuBar";
import ProductCard from "./ProductCard";

// Fetch function
const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

function ProductCatalog () {
    const { shoppingCart } = useContext(ShoppingCartContext);
    console.log("shoppingCart: ", shoppingCart);
    const [ selectedCategory, setSelectedCategory ] = useState("All");

    const { data, isLoading, error } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;

    // TODO: Make all cateogries title case then sort
    const availableCategories = ["All", ... new Set(data?.map(product => product.category))];

    const handleFilter = (eventKey: string | null) => {
       if (eventKey) setSelectedCategory(eventKey);
    }

    const filteredProducts = selectedCategory === "All" ?
        data :
        data?.filter(product => product.category === selectedCategory)

    return (
        <div>
            <MenuBar />
            <h1>JeniDub Store Catalog</h1>
            <p>Check out the offerings we have for our after Christmas sale</p>
            <DropdownButton
                id="dropdown-basic-button"
                title={selectedCategory}
                onSelect={handleFilter}
                size="lg"
            >
                {availableCategories.map((category: string) => (
                    <Dropdown.Item eventKey={category}>{category}</Dropdown.Item>
                ))}
            </DropdownButton>
            <br />
            <Container style={{textAlign: "center",}}>
                <Row md={3} style={{}}>
                    {filteredProducts?.map(product => (
                        <Col key={product.id}>
                            <ProductCard {...product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductCatalog;
