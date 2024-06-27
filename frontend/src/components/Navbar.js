import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #1c1c1c;
  padding: 1rem;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #61dafb;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </Nav>
  );
}

export default Navbar;
