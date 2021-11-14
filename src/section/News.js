import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import ImageTitle from "../components/ImageTitle";
import Subtitle from "../components/Subtitle";
import NewsCard from "../components/NewsCard";

import title02 from "../assets/title02.svg";
import datas from "../datas/news.json";

const Container = styled.section`
  padding-left: 48px;
  padding-right: 48px;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  .subtitle {
    display: inline-block;
    transform: translate(15px, -9px);
  }
`;

const FlexBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 494px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1400px;
    flex-direction: row;
    column-gap: 25px;
  }
`;

function News() {
  return (
    <Container>
      <Title>
        <ImageTitle image={title02} />
        <Subtitle>お知らせ</Subtitle>
      </Title>
      <FlexBox>
        {datas && datas.map((data, i) => <NewsCard key={data.id} data={data} />)}
      </FlexBox>
    </Container>
  );
}

export default News;