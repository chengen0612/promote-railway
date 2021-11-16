import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import Subtitle from "../components/Subtitle";

import title01 from "../assets/title01.svg";
import illustration02 from "../assets/illustration02.png";
import ahead from "../assets/ahead.svg";

const StyledContainer = styled(Container)`
  margin-top: 190px;
  position: relative;

  @media screen and (min-width: ${breakpoints.sm}) {
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
  width: 95px;
  position: absolute;
  top: -60px;
  left: 240px;

  @media screen and (min-width: ${breakpoints.sm}) {
    top: -10px;
    left: 310px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    width: 119px;
    top: 15px;
    left: 418px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 190px;
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
            <Subtitle>概要</Subtitle>
          </Title>
          <Heading>
            沿線価値向上
            <br />
            プロジェクトとは
            <Mandarin src={illustration02} alt="illustration02" />
          </Heading>
          <Description>
            南海電鉄は明治18年の創業から南大阪・和歌山とともに歩んできました。そして、令和となった今。南大阪・和歌山は人口減少という課題を抱えています。
            <br />
            「愛する南海沿線をもっと元気にしたい！」その想いで私たちはこのプロジェクトをスタートさせました。
            50年後、100年後も、活気溢れる南大阪・和歌山であり続けるために、沿線の自治体や企業、そして、沿線でくらす方、様々な方々と一緒に「沿線価値向上プロジェクト」に取り組みます！
          </Description>
          <Link>
            <span>詳細はこちら</span>
            <img src={ahead} alt="" />
          </Link>
        </Wrapper>
      </StyledContainer>
    </>
  );
}

export default AboutUs;
