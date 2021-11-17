import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import NoteCard from "../components/NoteCard";
import RedirectBtn from "../components/RedirectBtn";

import title04 from "../assets/title04.svg";

const iframeLinks = [
  "https://note.com/embed/notes/n410b7ac323ad",
  "https://note.com/embed/notes/n66f1439d6c36",
  "https://note.com/embed/notes/nba771a5522f9",
];

const StyledContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 300px;
  .btn {
    margin-top: 80px;
  }
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
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
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1200px;
    flex-direction: row;
    column-gap: 25px;
  }
`;

function Note() {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
}

export default Note;
