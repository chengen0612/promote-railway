import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import ScrollSign from "../components/ScrollSign";

import heroHoriz from "../assets/hero-horizontal.jpg";
import heroVert from "../assets/hero-vertical.jpg";
import sloganLg from "../assets/slogan-lg.svg";
import sloganMd from "../assets/slogan-md.svg";
import illustration01 from "../assets/illustration01.png";

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 1360px;
  position: relative;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 5/ 7;
  background-image: url(${heroVert});
  background-size: cover;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.md}) {
    aspect-ratio: 16 / 9;
    background-image: url(${heroHoriz});
  }
`;

const Image = styled.img`
  max-width: 650px;
  width: 60vw;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 45vw;
  }
`;

const Illustration = styled.img`
  min-width: 218px;
  width: 26vw;
  position: absolute;
  right: 0px;
  bottom: -210px;
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 349px;
    right: 40px;
    bottom: -22vw;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    max-width: 399px;
    right: 50px;
    bottom: -440px;
  }
`;

function HeroSection() {
  return (
    <Main>
      <ImageWrapper>
        <picture>
          <source media={`(max-width: ${breakpoints.md})`} srcSet={sloganMd} />
          <Image src={sloganLg} alt="slogan" />
        </picture>
      </ImageWrapper>
      <ScrollSign />
      <Illustration src={illustration01} alt="illustration01" />
    </Main>
  );
}

export default HeroSection;
