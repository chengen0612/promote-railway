import React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles/theme";
import background from "../assets/asset29.svg";

const Container = styled.div`
  padding-top: ${({ theme }) => theme.height.navbar.md};
  background-image: url(${background});
  @media screen and (min-width: ${breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.height.navbar.lg};
  }
`;

function PageWrapper({ children }) {
  return <Container>{children}</Container>;
}

export default PageWrapper;
