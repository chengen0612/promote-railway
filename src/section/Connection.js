import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";

import link01 from "../assets/link01.jpeg";
import link02 from "../assets/link02.jpeg";
import link03 from "../assets/link03.jpeg";

const AffiliatedCompanies = [
  {
    name: "Nankai",
    image: link01,
    direction: "/",
  },
  {
    name: "Otent Nankai",
    image: link02,
    direction: "/",
  },
  {
    name: "Startup Nankai",
    image: link03,
    direction: "/",
  },
];

const StyledContainer = styled(Container)`
  margin-top: 480px;
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 400px;
  }
`;

const GridBox = styled.aside`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadow.light};
  :hover {
    filter: opacity(0.85);
  }
`;

function Connection() {
  return (
    <StyledContainer>
      <GridBox>
        {AffiliatedCompanies.map((site, i) => (
          <a key={i} href={site.direction} title={site.name}>
            <Image src={site.image} alt={site.name} />
          </a>
        ))}
      </GridBox>
    </StyledContainer>
  );
}

export default Connection;
