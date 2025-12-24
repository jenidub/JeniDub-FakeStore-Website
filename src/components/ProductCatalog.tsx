// import { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import type { Product } from "../types/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

// handleSubmit function
const handleSubmit = () => {
    console.log("Added to the shopping cart...")
};

// const createDropdownButton = (productList: Product[]) => {
//     const availableCategories = [... new Set(productList.map(product => product.category))].sort();

//     return (
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="category-filter">
//                 Filter by Product Category
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 {availableCategories.map((category: string) => (
//                     <Dropdown.Item href="#">{category}</Dropdown.Item>
//                 ))}
//                 {/* <Dropdown.Item href="#/">Action</Dropdown.Item> */}
//             </Dropdown.Menu>
//         </Dropdown>
//     )
// }

function ProductCatalog () {
    // const { productList } = useContext();

    const { data, isLoading, error } = useQuery<Product[]>({
            queryKey: ['products'],
            queryFn: fetchProducts
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts</p>;

    // const productList: Product[] = [
    //     {
    //         id: 0,
    //         title: "Playstation 5 Disc Console",
    //         price: 499.99,
    //         description: "PS5 with disc capabilities - the best version",
    //         category: "Electronics",
    //         image: "",
    //     },
    //     {
    //         id: 1,
    //         title: "Playstation 5 Digital Console",
    //         price: 399.99,
    //         description: "PS5 all digital console - the other version",
    //         category: "Electronics",
    //         image: "",
    //     }
    // ];

    return (
        <div>
            <h1>JeniDub Store Catalog</h1>
            <p>Check out the offerings we have for our after Christmas sale</p>
            {/* {createDropdownButton(data)} */}
            <Container style={{textAlign: "center",}}>
                <Row style={{margin: "10px 0px"}}>
                    {data?.map((product: Product) => (
                        <Col md={4}>
                            <Card style={{margin: "10px 0px"}}>
                                <div>
                                    <h3>{product.id}</h3>
                                    <img 
                                        src={product.image}
                                        alt={product.title}
                                        style={{width: "50px",}}
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://placehold.co/50'
                                        }}
                                    />
                                    <h2>{product.title}</h2>
                                    <h3>${product.price.toFixed(2)}</h3>
                                    <p>{product.category}</p>
                                    <p>{product.description}</p>
                                    <Button onClick={handleSubmit}>Add to Shopping Cart</Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductCatalog;
