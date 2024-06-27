import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #1c1c1c;
  padding: 1rem;
  text-align: center;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 YoFuel. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
