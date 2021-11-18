import styled from "styled-components";

import { breakpoints } from "../styles/theme";

export default styled.div`
  padding-top: ${({ theme }) => theme.height.navbar.md};

  @media screen and (min-width: ${breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.height.navbar.lg};
  }
`;
