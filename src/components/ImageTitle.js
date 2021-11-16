import styled, { css } from "styled-components";

import { mixinMediaQuery } from "../styles/mixin";

export default styled.img`
  ${mixinMediaQuery({
    sm: "height: 42px;",
    md: "height: 56px;",
    lg: "height: 68px;",
  })}

  ${(props) =>
    props.large &&
    css`
      ${mixinMediaQuery({
        sm: "height: 64px;",
        md: "height: 72px;",
        lg: "height: 91px;",
      })}
    `}
`;
