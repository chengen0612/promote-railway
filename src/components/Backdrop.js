import styled from "styled-components";

import { breakpoints } from "../styles/theme";

import slimBackground from "../assets/background-slim.svg";
import background from "../assets/background.svg";

export default styled.div`
  background: url(${slimBackground}) center center / cover no-repeat;
  @media screen and (min-width: ${breakpoints.lg}) {
    background-image: url(${background});
  }
`;
