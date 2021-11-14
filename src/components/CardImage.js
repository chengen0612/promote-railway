import React from "react";
import styled from "styled-components";

const Figure = styled.figure`
  margin-bottom: 20px;
  aspect-ratio: 1 / 1;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadow.midian};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.short};
  img {
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function CardImage({ address, name }) {
  return (
    <Figure>
      <img src={address} alt={name} />
    </Figure>
  );
}

export default CardImage;
