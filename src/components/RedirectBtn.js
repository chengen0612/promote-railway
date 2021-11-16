import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../styles/theme";

import primaryArrow from "../assets/arrow-primary.svg";
import whiteArrow from "../assets/arrow-white.svg";

const Container = styled.div`
  text-align: center;
`;

const pseudoArrowStyles = css`
  :after {
    content: "";
    width: 9px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-45%);
    background-image: url(${primaryArrow});
  }
  :hover {
    :after {
      background-image: url(${whiteArrow});
    }
  }
`;

const Link = styled.a`
  display: inline-block;
  width: 100%;
  line-height: 52px;
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: ${({ theme }) => theme.shadow.midian};
  border-radius: 35px;
  color: #fff;
  font-weight: 900;
  position: relative;
  transition: ${({ theme }) => theme.transition.short};
  :hover {
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: unset;
    transform: translateY(10px);
  }
  ${pseudoArrowStyles};
  @media screen and (min-width: ${breakpoints.sm}) {
    width: 355px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    line-height: 66px;
    font-size: 1.8rem;
  }
`;

function RedirectBtn({ children }) {
  return (
    <Container className="btn">
      <Link href="/">{children}</Link>
    </Container>
  );
}

export default RedirectBtn;
