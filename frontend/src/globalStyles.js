import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    color: #ffffff;
  }

  p {
    text-align: center;
    color: #b0b0b0;
  }

  a {
    color: #61dafb;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
  }
`;

export default GlobalStyle;
