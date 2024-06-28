import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { CartContext } from "../CartContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

const ProductCard = styled.div`
  background: #1c1c1c;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  text-align: center;
  width: 80%;
  max-width: 600px;
`;

const Title = styled.h2`
  color: #ffffff;
`;

const Description = styled.p`
  color: #b0b0b0;
`;

const Price = styled.p`
  color: #61dafb;
`;

const Button = styled.button`
  background: #61dafb;
  color: #1c1c1c;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #21a1f1;
  }
`;

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("There was an error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product._id}>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price}</Price>
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </ProductCard>
      ))}
    </Container>
  );
}

export default ProductList;
