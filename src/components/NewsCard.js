import React from "react";
import styled from "styled-components";

import Card from "./Card";
import CardImage from "./CardImage";
import Tag from "./Tag";

import news01 from "../assets/news01.jpg";
import news02 from "../assets/news02.jpg";
import news03 from "../assets/news03.jpg";
import news04 from "../assets/news04.jpg";

const mapImageToAddress = {
  news01,
  news02,
  news03,
  news04,
};

const insertLineBreak = (string) => {
  if (!string.includes("\n")) return string;

  const phrases = string.split("\n");
  const lastIndex = phrases.length - 1;
  const output = [];

  for (let i = 0; i < lastIndex; i++) {
    output.push(phrases[i]);
    output.push(<br />);
  }
  output.push(phrases[lastIndex]);

  return output;
};

const formatDate = (date) => {
  return date.replaceAll("-", "/");
};

const Link = styled.a`
  flex: 1 1 0;
`;

const Time = styled.time`
  font-size: 1.2em;
  letter-spacing: 0.6px;
  font-weight: 700;
`;

const Heading = styled.h4`
  margin: 0;
  font-weight: 400;
`;

function NewsCard({ data }) {
  const { title, image, date, direction, tags } = data;
  const imageAddress = mapImageToAddress[image];

  return (
    <Link href={direction}>
      <Card>
        <CardImage address={imageAddress} name={image} />
        <Time dateTime={date}>{formatDate(date)}</Time>
        <Heading>{insertLineBreak(title)}</Heading>
        {tags && tags.map((text, i) => <Tag key={i}>{text}</Tag>)}
      </Card>
    </Link>
  );
}

export default NewsCard;
