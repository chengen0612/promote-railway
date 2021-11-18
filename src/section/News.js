import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import { mixinMediaQuery } from "../styles/mixin";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import Subtitle from "../components/Subtitle";
import NewsCard from "../components/NewsCard";

import title02 from "../assets/title02.svg";
import datas from "../datas/news.json";
import RedirectBtn from "../components/RedirectBtn";

const StyledContainer = styled(Container)`
  padding-left: 48px;
  padding-right: 48px;
  > .btn {
    margin-top: 40px;
  }
  ${mixinMediaQuery({
    sm: "margin-top: 320px;",
    md: "margin-top: 370px;",
    lg: "margin-top: 32vw;",
    xl: "margin-top: 500px;",
  })}
`;

const Title = styled.h2`
  text-align: center;
  .subtitle {
    display: inline-block;
    transform: translate(15px, -9px);
  }
`;

const FlexBox = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 494px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 50px;
    max-width: 1400px;
    flex-direction: row;
    column-gap: 25px;
  }
`;

function News() {
  return (
    <StyledContainer>
      <Title>
        <ImageTitle src={title02} alt="News" />
        <Subtitle>お知らせ</Subtitle>
      </Title>
      <FlexBox>
        {datas && datas.map((data) => <NewsCard key={data.id} data={data} />)}
      </FlexBox>
      <RedirectBtn>すべてのお知らせを見る</RedirectBtn>
    </StyledContainer>
  );
}

export default News;
