import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import Subtitle from "../components/Subtitle";
import RedirectBtn from "../components/RedirectBtn";

import title05 from "../assets/title05.svg";
import illustration14 from "../assets/illustration14.png";
import illustration15 from "../assets/illustration15.png";

const StyledContainer = styled(Container)`
  margin-top: 150px;
  overflow-x: clip;
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 200px;
  }
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    .subtitle {
      align-self: end;
      transform: translate(20px, -3px);
    }
  }
`;

const WhiteBoard = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 36px 100px;
  max-width: 1200px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.midian};
  .btn {
    margin-top: 40px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 50px;
    padding-top: 60px;
    .btn {
      margin-top: 60px;
    }
  }
`;

const Paragraph = styled.p`
  margin-left: auto;
  margin-right: auto;
  max-width: 728px;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 2;
  @media screen and (min-width: ${breakpoints.lg}) {
    font-size: 1.8rem;
  }
`;

const Figure = styled.figure`
  width: 100%;
  position: relative;
  * {
    position: absolute;
  }
  .manju {
    width: 104px;
    left: -5px;
    bottom: -135px;
  }
  .people {
    width: 278px;
    right: -35px;
    bottom: -540px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    .manju {
      left: 24px;
      bottom: -150px;
    }
    .people {
      width: 300px;
      right: 0px;
      bottom: -470px;
    }
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    .manju {
      width: 130px;
      left: 10px;
      bottom: -150px;
    }
    .people {
      width: 343px;
      right: -40px;
      bottom: -420px;
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    .manju {
      width: 173px;
      left: 24px;
    }
    .people {
      width: 437px;
      right: -80px;
    }
  }
`;

function Contact() {
  return (
    <StyledContainer>
      <Title>
        <ImageTitle src={title05} alt="Contact" />
        <Subtitle>お問い合わせ</Subtitle>
      </Title>
      <WhiteBoard>
        <Paragraph>
          「南大阪・和歌山のために、南海電鉄と一緒にやってみたいことがある」
          <br />
          「沿線価値向上プロジェクトに興味を持ったのでじっくり話を聞いてみたい」
          <br />
          「沿線価値向上プロジェクトについて取材したい」
          <br />
          そんな方からのご連絡お待ちしております！
          <br />
          少しでも興味をお持ちいただけましたら、こちらからお気軽にお問合せください。
        </Paragraph>
        <RedirectBtn>お問い合わせ</RedirectBtn>
        <Figure>
          <img className="manju" src={illustration15} alt="illustration15" />
          <img className="people" src={illustration14} alt="illustration14" />
        </Figure>
      </WhiteBoard>
    </StyledContainer>
  );
}

export default Contact;
