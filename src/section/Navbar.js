import React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles/theme";
import logo from "../assets/logo.svg";
import slogan from "../assets/logo-slogan.svg";
import { NavbarTabs, NavbarDropdown } from "../components/NavbarLists";
import NavbarMenu from "../components/NavbarMenu";

const Header = styled.header`
  width: 100%;
  position: fixed;
  background: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.shadow.light};
  z-index: 2;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  max-width: 1600px;
  height: ${({ theme }) => theme.height.navbar.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: ${breakpoints.lg}) {
    height: ${({ theme }) => theme.height.navbar.lg};
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  & a img {
    transition: ${({ theme }) => theme.transition.short};
  }
  & a:hover img {
    filter: opacity(0.85);
  }
`;

const Logo = styled.img`
  width: 39px;
  @media screen and (min-width: ${breakpoints.lg}) {
    width: 58px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 80px;
  }
`;

const Slogan = styled.img`
  width: 174px;
  @media screen and (min-width: ${breakpoints.lg}) {
    width: 220px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 350px;
  }
`;

function Navbar() {
  return (
    <>
      <Header>
        <Container>
          <Group>
            <a href="/">
              <Logo src={logo} alt="logo" />
            </a>
            <a href="/">
              <Slogan src={slogan} alt="slogan" />
            </a>
          </Group>
          <NavbarTabs />
          <NavbarMenu />
        </Container>
        {/* <NavbarDropdown /> */}
      </Header>
    </>
  );
}

export default Navbar;
