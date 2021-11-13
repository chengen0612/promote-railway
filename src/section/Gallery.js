import React from "react";
import styled from "styled-components";

import { Nature, Station, People } from "../components/ClipPath";
import { BlobWrapper, nature, station, people } from "../styles/blobs";
import { mixinMediaQuery } from "../styles/mixin";
import { printMediaQuery } from "../styles/print";

import illustration03 from "../assets/illustration03.png";
import illustration04 from "../assets/illustration04.png";
import illustration05 from "../assets/illustration05.png";
import illustration06 from "../assets/illustration06.png";
import illustration07 from "../assets/illustration07.png";
import blob01 from "../assets/blob01.svg";
import blob02 from "../assets/blob02.svg";
import blob03 from "../assets/blob03.svg";

const Container = styled.section`
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  ${mixinMediaQuery({
    sm: "margin-top: 50px",
    md: "margin-top: unset",
    lg: "margin-top: -15px",
    xl: "margin-top: -45px",
  })}
`;

const NatureBlob = styled(BlobWrapper)`
  ${printMediaQuery(nature.figure)}
  ${printMediaQuery(nature.blob, ".blob")}
  ${printMediaQuery(nature.illus.young, ".young")}
`;

const StationBlob = styled(BlobWrapper)`
  ${printMediaQuery(station.figure)};
  ${printMediaQuery(station.blob, ".blob")};
  ${printMediaQuery(station.illus.cat, ".cat")};
  ${printMediaQuery(station.illus.boy, ".boy")};
`;

const PeopleBlob = styled(BlobWrapper)`
  ${printMediaQuery(people.figure)};
  ${printMediaQuery(people.blob, ".blob")};
  ${printMediaQuery(people.illus.lady, ".lady")};
  ${printMediaQuery(people.illus.octopus, ".octopus")};
`;

function Gallery() {
  return (
    <Container>
      <NatureBlob>
        <img className="blob" src={blob01} alt="blob01" />
        <Nature />
        <img className="young" src={illustration03} alt="illustration03" />
      </NatureBlob>
      <StationBlob>
        <img className="blob" src={blob02} alt="blob02" />
        <Station />
        <img className="cat" src={illustration04} alt="illustration04" />
        <img className="boy" src={illustration05} alt="illustration05" />
      </StationBlob>
      <PeopleBlob>
        <img className="blob" src={blob03} alt="blob03" />
        <People />
        <img className="lady" src={illustration06} alt="illustration06" />
        <img className="octopus" src={illustration07} alt="illustration07" />
      </PeopleBlob>
    </Container>
  );
}

export default Gallery;
