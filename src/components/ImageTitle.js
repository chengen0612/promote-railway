import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";

const Image = styled.img`
  height: 42px;

  @media screen and (min-width: ${breakpoints.lg}) {
    height: 56px;
  }
`;

function ImageTitle({ image }) {
  return <Image src={image} alt={image} />;
}

export default ImageTitle;
