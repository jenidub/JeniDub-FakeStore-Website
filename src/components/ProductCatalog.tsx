import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Dropdown, DropdownButton, Container, Row, Col, Card, Button } from "react-bootstrap";
import type { Product } from "../types/Product";

// Fetch function
const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

function ProductCatalog () {
    const [ selectedCategory, setSelectedCategory ] = useState("All");

    const { data, isLoading, error } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts</p>;

    // TODO: Make all cateogries title case then sort
    const availableCategories = ["All", ... new Set(data?.map(product => product.category))];

    const handleFilter = (eventKey: string | null) => {
       if (eventKey) setSelectedCategory(eventKey);
    }

    const filteredProducts = selectedCategory === "all" ?
        data :
        data?.filter(product => product.category === selectedCategory)

    return (
        <div>
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
                        <Col>
                            <Card style={{height: "600px"}}>
                                <img src={product.image} alt={`${product.title} product image`} style={{margin: "0 auto", width: "50px", }}/>
                                <h4>{product.title}</h4>
                                <p><b>${product.price.toFixed(2)}</b></p>
                                <p>{product.description}</p>
                                <Button>Add to Shopping Cart</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    )
}

export default ProductCatalog;
