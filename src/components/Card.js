import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  transition: ${({ theme }) => theme.transition.short};
  :hover {
    color: ${({ theme }) => theme.color.primary};
    figure {
      box-shadow: unset;
      transform: translateY(10px);
    }
  }
`;

function Card({ children }) {
  return <Container>{children}</Container>;
}

export default Card;
