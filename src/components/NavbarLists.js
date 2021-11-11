import React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles/theme";

const linkList = [
  "沿線価値向上プロジェクトとは",
  "お知らせ",
  "プロジェクト事例紹介",
  "note",
  "お問い合わせ",
];

const List = styled.ul`
  display: none;
  @media screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    & > li > a {
      padding: 30px 15px;
      font-size: 1.5rem;
      font-weight: 900;
      transition: ${({ theme }) => theme.transition.short};
      &:hover {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    & > li > a {
      padding: 30px;
    }
  }
`;

const Dropdown = styled.ul`
  padding-top: 30px;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.height.navbar.md});
  position: absolute;
  background: ${({ theme }) => theme.color.primary};
  color: #ffffff;
  text-align: center;
  font-weight: 900;
  z-index: -1;
  & li > a {
    padding-top: 30px;
    padding-bottom: 30px;
    display: block;
  }
`;

const createListItems = linkList.map((value, i) => (
  <li key={i}>
    <a href="/">{value}</a>
  </li>
));

export const NavbarTabs = () => (
  <nav>
    <List>{createListItems}</List>
  </nav>
);

export const NavbarDropdown = () => (
  <nav>
    <Dropdown>{createListItems}</Dropdown>
  </nav>
);
