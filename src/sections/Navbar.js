import React, { useState } from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../styles/theme";
import { Menu, DropdownMenu } from "../components/NavbarMenu";
import HamburgerBtn from "../components/HamburgerBtn";

import logo from "../assets/logo.svg";
import slogan from "../assets/slogan-logo.svg";

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.background};
  z-index: 2;

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: ${({ theme }) => theme.shadow.light};
    `}
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  max-width: 1600px;
  height: ${({ theme }) => theme.height.navbar.md};
  position: relative;
  z-index: 1;
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
  a img {
    transition: ${({ theme }) => theme.transition.short};
  }
  a:hover img {
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
  const [isDropDownShowing, setIsDropDownShowing] = useState(false);

  const handleScroller = () => {
    document.body.style.overflow = isDropDownShowing ? "auto" : "hidden";
  };
  const toggleDropdownMenu = () => {
    setIsDropDownShowing(!isDropDownShowing);
    handleScroller();
  };

  return (
    <>
      <Header shadow={!isDropDownShowing}>
        <Container>
          <Group>
            <a href="/">
              <Logo src={logo} alt="logo" />
            </a>
            <a href="/">
              <Slogan src={slogan} alt="slogan" />
            </a>
          </Group>
          <Menu />
          <HamburgerBtn
            handler={toggleDropdownMenu}
            isCross={isDropDownShowing}
          />
        </Container>
        <DropdownMenu visible={isDropDownShowing} />
      </Header>
    </>
  );
}

export default Navbar;
