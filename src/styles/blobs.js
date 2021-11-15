import styled, { css } from "styled-components";

export const BlobWrapper = styled.figure`
  position: relative;
  * {
    position: absolute;
  }
  svg,
  .blob {
    width: 100%;
  }
`;

// Nature Styles
const nature = {};
nature.illus = {};

nature.figure = {
  sm: css`
    margin-left: -10%;
    width: 326px;
    z-index: 1;
  `,
  md: css`
    margin-left: -10%;
    width: 390px;
  `,
  lg: css`
    margin-left: 40%;
    min-width: 391px;
    width: 40vw;
  `,
  xl: css`
    margin-left: 20%;
    width: 652px;
  `,
};

nature.blob = {
  sm: css`
    top: 3%;
    right: -5%;
  `,
};

nature.illus.young = {
  sm: css`
    width: 123px;
    top: -70px;
    right: -12%;
  `,
  md: css`
    width: 147px;
    right: -20%;
  `,
  lg: css`
    min-width: 130px;
    width: 12vw;
    top: 30px;
    right: -12%;
  `,
  xl: css`
    width: 217px;
  `,
};

export { nature };

// Station Styles
const station = {};
station.illus = {};

station.figure = {
  sm: css`
    margin-top: 165px;
    margin-left: 30%;
    width: 375px;
  `,
  md: css`
    margin-top: 210px;
    margin-left: 25%;
    width: 450px;
  `,
  lg: css`
    margin-top: 135px;
    margin-left: -40%;
    min-width: 495px;
    width: 50vw;
  `,
  xl: css`
    margin-top: 220px;
    margin-left: -30%;
    width: 813px;
  `,
};

station.blob = {
  sm: css`
    top: 10%;
    left: -15%;
    transform: rotate(5deg) scale(0.9);
  `,
  md: css`
    top: 5%;
    transform: scale(0.9);
  `,
  lg: css`
    top: unset;
    left: -5%;
  `,
};

station.illus.cat = {
  sm: css`
    width: 121px;
    top: -18px;
    left: -5%;
    z-index: 1;
  `,
  md: css`
    width: 145px;
    top: -50px;
  `,
  lg: css`
    width: 15vw;
    min-width: 128px;
    top: -90px;
    left: 40%;
  `,
  xl: css`
    width: 214px;
    top: -108px;
    left: 45%;
  `,
};

station.illus.boy = {
  sm: css`
    width: 240px;
    top: 135px;
    left: -35%;
    z-index: 1;
  `,
  md: css`
    width: 286px;
    top: 134px;
  `,
  lg: css`
    min-width: 254px;
    width: 28vw;
    top: 210px;
    left: -10%;
  `,
  xl: css`
    width: 412px;
    top: 243px;
  `,
};

export { station };

// People Styles
const people = {};
people.illus = {};

people.figure = {
  sm: css`
    margin-top: 280px;
    margin-left: -2%;
    width: 252px;
  `,
  md: css`
    margin-top: 345px;
    width: 302px;
  `,
  lg: css`
    margin-top: 16%;
    margin-left: 60%;
    min-width: 302px;
    width: 32vw;
  `,
  xl: css`
    margin-top: 14%;
    margin-left: 60%;
    width: 491px;
  `,
};

people.blob = {
  sm: css`
    top: -3%;
    right: -12%;
    transform: rotate(-15deg) scale(0.9);
  `,
};

people.illus.lady = {
  sm: css`
    width: 112px;
    top: -36px;
    right: -18%;
    z-index: 1;
  `,
  md: css`
    width: 134px;
  `,
  lg: css`
    min-width: 118px;
    width: 13vw;
    top: -90px;
    left: -30%;
  `,
  xl: css`
    width: 192px;
  `,
};

people.illus.octopus = {
  sm: css`
    width: 123px;
    top: 117px;
    left: -23%;
  `,
  md: css`
    width: 147px;
  `,
  lg: css`
    min-width: 132px;
    width: 15vw;
    top: 154px;
    left: 65%;
  `,
  xl: css`
    width: 212px;
    top: 189px;
  `,
};

export { people };
