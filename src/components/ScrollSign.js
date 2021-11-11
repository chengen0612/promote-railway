import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../styles/theme";
import arrow from "../assets/arrow.svg";

const float = keyframes`
  0, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1rem);
  }
`;

const Container = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  animation: ${float} 1.6s ease-in-out infinite;
  & > p {
    margin-top: 2.5rem;
    margin-bottom: 0px;
    font-size: 1.5rem;
    font-weight: 500;
  }
  & > img {
    width: 1rem;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    & > p {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      font-weight: 600;
    }
    & > img {
      width: 1.5rem;
    }
  }
`;

function ScrollSign() {
  return (
    <Container>
      <p>scroll</p>
      <img src={arrow} alt="arrow" />
    </Container>
  );
}

export default ScrollSign;
