import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px 20px;
  flex: 1 1 0;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.light};
  transition: ${({ theme }) => theme.transition.short};
  :hover {
    transform: translateY(10px);
  }
`;

const Wrapper = styled.div`
  height: 190px;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  margin-left: -2%;
  margin-top: -1%;
  width: 105%;
  height: 105%;
  position: relative;
  border: unset;
  outline: unset;
`;

function NoteCard({ link }) {
  console.log(link);
  return (
    <Card>
      <Wrapper>
        <Iframe src={link} />
      </Wrapper>
    </Card>
  );
}

export default NoteCard;
