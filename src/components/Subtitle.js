import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";

const Text = styled.span`
  padding: 2px 16px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.secondary};
  color: #fff;
  font-size: 1.2rem;
  font-weight: 900;

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 2px 20px;
    font-size: 1.6rem;
  }
`;

function Subtitle({ children }) {
  return <Text className="subtitle">{children}</Text>;
}

export default Subtitle;
