import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import NoteCard from "../components/NoteCard";
import RedirectBtn from "../components/RedirectBtn";
import BlobWrapper from "../components/BlobWrapper";
import { Harbor } from "../components/ClipPath";

import illustration11 from "../assets/illustration11.png";
import illustration12 from "../assets/illustration12.png";
import title04 from "../assets/title04.svg";
import blob04 from "../assets/blob04.svg";

const iframeLinks = [
  "https://note.com/embed/notes/n410b7ac323ad",
  "https://note.com/embed/notes/n66f1439d6c36",
  "https://note.com/embed/notes/nba771a5522f9",
];

const StyledContainer = styled(Container)`
  margin-top: 100px;
  padding-top: 200px;
  position: relative;
  overflow-x: clip;
  .btn {
    margin-top: 80px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: unset;
  }
`;

const Illustrations = styled.figure`
  width: 100%;
  position: absolute;
  * {
    position: absolute;
  }
  .cook {
    width: 147px;
    top: -240px;
  }
  .farmer {
    width: 235px;
    top: -250px;
    right: 40px;
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    .cook {
      left: 50%;
      transform: translateX(-150%);
    }
    .farmer {
      right: 50%;
      transform: translateX(75%);
    }
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    .cook {
      max-width: 257px;
      width: 18vw;
      transform: unset;
      top: -300px;
      left: 3vw;
    }
    .farmer {
      max-width: 370px;
      width: 26vw;
      transform: unset;
      top: -340px;
      right: 7vw;
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    .cook {
      max-width: 288px;
      top: -330px;
      left: 100px;
    }
    .farmer {
      max-width: 443px;
      top: -430px;
    }
  }
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  position: relative;
  z-index: 1;
  > .intro {
    max-width: 780px;
    font-size: 1.6rem;
    font-weight: 900;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    column-gap: 50px;
    > .intro {
      max-width: 560px;
      font-size: 18px;
      line-height: 2;
      letter-spacing: 3px;
      order: -1;
    }
  }
`;

const FlexBox = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 490px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1200px;
    flex-direction: row;
    column-gap: 25px;
  }
`;

const HarborBlob = styled(BlobWrapper)`
  width: 378px;
  position: absolute;
  right: -75px;
  bottom: 0;
  .blob {
    width: 90%;
    transform: translate(50px, 75px);
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 490px;
    width: 40vw;
    bottom: 200px;
  }
`;

function Note() {
  return (
    <StyledContainer>
      <Illustrations>
        <img className="cook" src={illustration11} alt="cook" />
        <img className="farmer" src={illustration12} alt="farmer" />
      </Illustrations>
      <Heading>
        <ImageTitle src={title04} alt="Note" />
        <p className="intro">
          note「南海電鉄＃沿線価値向上プロジェクト」では、沿線で活躍する企業や人、イベントの様子など、南大阪・和歌山を盛り上げるコンテンツを紹介します。
        </p>
      </Heading>
      <FlexBox>
        {iframeLinks.map((link, i) => (
          <NoteCard key={i} link={link} />
        ))}
      </FlexBox>
      <RedirectBtn>noteを見る</RedirectBtn>
      <HarborBlob>
        <img className="blob" src={blob04} alt="blob04" />
        <Harbor />
      </HarborBlob>
    </StyledContainer>
  );
}

export default Note;
