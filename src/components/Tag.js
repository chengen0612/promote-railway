import React from "react";
import styled from "styled-components";

const Span = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.1em;
  font-weight: 900;
  letter-spacing: -0.5px;
`;

function Tag({ children }) {
  return <Span>#{children}</Span>;
}

export default Tag;
