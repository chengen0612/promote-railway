import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";

import title01 from "../assets/title01.svg";
import illustration02 from "../assets/illustration02.png";
import ahead from "../assets/ahead.svg";

const Container = styled.section`
  margin: 190px auto unset;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  overflow: hidden;

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
  display: flex;
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

const TitleImage = styled.img`
  width: 189px;

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 252px;
  }
`;

const SubTitle = styled.span`
  padding: 2px 16px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.secondary};
  color: #fff;
  font-size: 1.2rem;
  font-weight: 900;

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 2px 20px;
    font-size: 1.6rem;
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
  margin-top: 30px;
  display: inline-block;
  padding-bottom: 6px;
  letter-spacing: 5px;
  border-bottom: 1.5px solid ${({ theme }) => theme.color.secondary};
  vertical-align: middle;
  img {
    margin-left: 3rem;
  }
`;

function AboutUs() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            <TitleImage src={title01} alt="title01" />
            <SubTitle className="subtitle">概要</SubTitle>
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
      </Container>
    </>
  );
}

export default AboutUs;
