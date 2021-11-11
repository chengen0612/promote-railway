import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
