import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../styles/theme";

const Button = styled.button`
  @media screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const strokeStyles = css`
  width: 18px;
  height: 1px;
  background: ${({ theme }) => theme.color.secondary};
`;

const createPseudoStroke = (vertical) => css`
  ${strokeStyles};

  content: "";
  position: absolute;
  left: 0px;
  ${vertical === "top" && "top: 6px;"};
  ${vertical === "bottom" && "bottom: 6px;"};
  background: ${({ theme }) => theme.color.secondary};
  transition: ${({ theme }) => theme.transition.short};
`;

const Strokes = styled.div`
  ${strokeStyles};

  margin: 20px auto 10px;
  position: relative;

  :before {
    ${createPseudoStroke("top")}
  }
  :after {
    ${createPseudoStroke("bottom")}
  }

  ${(props) =>
    props.cross &&
    css`
      background: transparent;
      :before {
        top: 0;
        transform: rotate(135deg);
      }
      :after {
        bottom: 0;
        transform: rotate(-135deg);
      }
    `}
`;

function HamburgerBtn({ handler, isCross }) {
  return (
    <Button onClick={handler}>
      <Strokes cross={isCross}></Strokes>
      <span>MENU</span>
    </Button>
  );
}

export default HamburgerBtn;
