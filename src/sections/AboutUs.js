import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import Subtitle from "../components/Subtitle";

import title01 from "../assets/title01.svg";
import illustration02 from "../assets/illustration02.png";
import ahead from "../assets/icons/ahead.svg";

const StyledContainer = styled(Container)`
  margin-top: 200px;
  position: relative;
  @media screen and (min-width: ${breakpoints.sm}) {
    margin-top: 150px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 58px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    padding-left: 86px;
    padding-right: 86px;
    max-width: 1240px;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 672px;
  }
`;

const Title = styled.div`
  display: inline-flex;
  flex-direction: column;
  .subtitle {
    align-self: flex-start;
    transform: translateY(15px);
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    .subtitle {
      align-self: flex-end;
      transform: translateY(12px) translateX(20px);
    }
  }
`;

const Heading = styled.h3`
  font-size: 36px;
  line-height: 1.1;
  position: relative;

  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 48px;
  }
`;

const Mandarin = styled.img`
  min-width: 95px;
  width: 13vw;
  position: absolute;
  top: -60px;
  left: 220px;
  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 130px;
    top: -10px;
    left: 310px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 178px;
    top: -15px;
    left: 418px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    max-width: 190px;
    top: -50%;
    left: 470px;
  }
`;

const Description = styled.p`
  line-height: 2.5;
  font-size: 1.5rem;

  @media screen and (min-width: ${breakpoints.lg}) {
    line-height: 3;
    font-size: 1.6rem;
  }
`;

const Link = styled.a`
  margin-top: 4rem;
  display: inline-block;
  padding-bottom: 6px;
  border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
  font-size: 1.2rem;
  letter-spacing: 5px;
  vertical-align: middle;
  img {
    margin-left: 3rem;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 1.4rem;
  }
`;

function AboutUs() {
  return (
    <>
      <StyledContainer>
        <Wrapper>
          <Title>
            <ImageTitle src={title01} alt="About Us" />
            <Subtitle>??????</Subtitle>
          </Title>
          <Heading>
            ??????????????????
            <br />
            ????????????????????????
            <Mandarin src={illustration02} alt="illustration02" />
          </Heading>
          <Description>
            ?????????????????????18??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            <br />
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            50?????????100?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Description>
          <Link>
            <span>??????????????????</span>
            <img src={ahead} alt="" />
          </Link>
        </Wrapper>
      </StyledContainer>
    </>
  );
}

export default AboutUs;
