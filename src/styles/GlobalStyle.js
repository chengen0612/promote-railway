import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body, ul, figure, p {
    margin: 0;
    padding: 0;
  }

  body {
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ theme }) => theme.breakpoints.xl};
    font-family: "Noto Sans JP", "Lucida Grande", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "メイリオ", "Meiryo UI", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.secondary};
    background: ${({ theme }) => theme.color.chiffon};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: unset;
    cursor: pointer;
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
