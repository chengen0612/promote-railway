import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import Container from "../components/Container";
import ImageTitle from "../components/ImageTitle";
import Subtitle from "../components/Subtitle";
import ProjectCard from "../components/ProjectCard";
import RedirectBtn from "../components/RedirectBtn";

import datas from "../datas/projects.json";
import illustration08 from "../assets/illustration08.png";
import illustration09 from "../assets/illustration09.png";
import illustration10 from "../assets/illustration10.png";
import title03 from "../assets/title03.svg";

const StyledContainer = styled(Container)`
  margin-top: 200px;
  @media screen and (min-width: ${breakpoints.lg}) {
    padding-left: unset;
    padding-right: 4vw;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    margin-top: 250px;
    padding-left: 3vw;
    padding-right: 3vw;
  }
`;

const Figure = styled.figure`
  margin-bottom: 150px;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .train {
    max-width: 210px;
    min-width: 140px;
    width: 20vw;
    transform: translate(40%, 40%);
  }
  .fish {
    max-width: 108px;
    min-width: 77px;
    width: 11vw;
    transform: translate(-5%, -50%);
  }
  .engineer {
    max-width: 230px;
    min-width: 168px;
    width: 24vw;
    transform: translate(-25%, -3%);
  }
  @media screen and (min-width: ${breakpoints.md}) {
    .train {
      transform: translate(-15%, 75%);
    }
    .fish {
      transform: translate(70%, -20%);
    }
    .engineer {
      transform: translate(25%, 35%);
    }
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    .train {
      transform: translate(-15%, 45%);
    }
    .fish {
      transform: translate(95%, -15%);
    }
    .engineer {
      transform: translate(30%, 15%);
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    .train {
      max-width: 246px;
    }
    .fish {
      max-width: 136px;
    }
    .engineer {
      max-width: 293px;
    }
  }
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  * {
    z-index: 1;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    .subtitle {
      transform: translateX(15px);
    }
  }
`;

const LooseLeaf = styled.div`
  margin-top: 100px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 120px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.light};
  border-radius: 30px;
  position: relative;
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: 10vw;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    border-radius: 30px;
  }
`;

const FlexBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 466px;
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 1400px;
    width: 100%;
    top: -4vw;
    flex-direction: row;
    column-gap: 25px;
  }
`;

function Projects() {
  return (
    <StyledContainer>
      <Figure>
        <img className="train" src={illustration08} alt="illustration08" />
        <img className="fish" src={illustration09} alt="illustration09" />
        <img className="engineer" src={illustration10} alt="illustration10" />
      </Figure>
      <Title>
        <ImageTitle src={title03} alt="Project" large />
        <Subtitle>??????????????????????????????</Subtitle>
      </Title>
      <LooseLeaf>
        <FlexBox>
          {datas &&
            datas.map((data) => <ProjectCard key={data.id} data={data} />)}
        </FlexBox>
        <RedirectBtn>???????????????????????????</RedirectBtn>
      </LooseLeaf>
    </StyledContainer>
  );
}

export default Projects;
