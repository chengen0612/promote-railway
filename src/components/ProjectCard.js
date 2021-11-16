import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Card from "../components/Card";
import CardImage from "../components/CardImage";

import project01 from "../assets/project01.jpeg";
import project02 from "../assets/project02.png";
import project03 from "../assets/project03.jpeg";
import project04 from "../assets/project04.jpeg";

const mapImageToAddress = {
  project01,
  project02,
  project03,
  project04,
};

const Link = styled.a`
  flex: 1 1 0;
`;

const StyledCard = styled(Card)`
  :hover {
    .title {
      border-bottom: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
`;

const CardTitle = styled.h3`
  margin-top: unset;
  margin-bottom: 5px;
  padding-bottom: 10px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
  font-weight: 900;
  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 1.8rem;
  }
`;

function ProjectCard({ data }) {
  const { title, image, brief, redirect } = data;
  const imageAddress = mapImageToAddress[image];

  return (
    <Link href={redirect}>
      <StyledCard>
        <CardImage address={imageAddress} name={image}></CardImage>
        <CardTitle className="title">{title}</CardTitle>
        <p>{brief}</p>
      </StyledCard>
    </Link>
  );
}

export default ProjectCard;
