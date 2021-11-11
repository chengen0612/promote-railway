import React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles/theme";

const Button = styled.button`
  &:hover div {
    background: transparent;
    &:before {
      top: 0;
      transform: rotate(135deg);
    }
    &:after {
      bottom: 0;
      transform: rotate(-135deg);
    }
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const strokeStyles = {
  width: "18px",
  height: "1px",
  background: ({ theme }) => theme.color.secondary,
};

const createPseudoStroke = (vertical) => ({
  ...strokeStyles,
  content: `""`,
  position: "absolute",
  left: "0px",
  [vertical]: "6px",
  background: ({ theme }) => theme.color.secondary,
  transition: ({ theme }) => theme.transition.short,
});

const Strokes = styled.div`
  ${strokeStyles};
  margin: 20px auto 10px;
  position: relative;
  &:before {
    ${createPseudoStroke("top")}
  }
  &:after {
    ${createPseudoStroke("bottom")}
  }
`;

function NavbarMenu() {
  return (
    <Button>
      <Strokes></Strokes>
      <span>MENU</span>
    </Button>
  );
}

export default NavbarMenu;