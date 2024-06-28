import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

const CartItem = styled.div`
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

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h1>Your Cart</h1>
      {cart.map((product, index) => (
        <CartItem key={index}>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price}</Price>
        </CartItem>
      ))}
    </Container>
  );
}

export default Cart;
