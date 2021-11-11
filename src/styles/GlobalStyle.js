import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body, ul {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.4rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  button {
    padding: unset;
    background-color: unset;
    outline: unset;
    border:unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
