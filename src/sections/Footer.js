import React from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/theme";
import image from "../assets/footer.png";

const Container = styled.footer`
  margin-top: 80px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 1080px;
  width: 100%;
`;

const Copyright = styled.p`
  padding-top: 30px;
  padding-bottom: 40px;
  @media screen and (min-width: ${breakpoints.lg}) {
    padding-top: 45px;
    padding-bottom: 60px;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

function Footer() {
  return (
    <Container>
      <Image src={image} alt="footer" />
      <Copyright>
        Copyright © Nankai Electric Railway Corporation. All right reserved.
      </Copyright>
    </Container>
  );
}

export default Footer;
