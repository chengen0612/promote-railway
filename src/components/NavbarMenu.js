import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../styles/theme";

const List = styled.ul`
  display: none;
  @media screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    li > a {
      padding: 30px 15px;
      font-size: 1.5rem;
      font-weight: 900;
      transition: ${({ theme }) => theme.transition.short};
      :hover {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    li > a {
      padding: 30px;
    }
  }
`;

const DropdownList = styled.ul`
  padding-top: 30px;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: ${({ theme }) => theme.color.background};
  text-align: center;
  font-weight: 900;

  top: -100vh;
  transition: 0.8s ease-in-out;

  li > a {
    padding-top: 30px;
    padding-bottom: 30px;
    display: block;
    transition: ${({ theme }) => theme.transition.short};
    :hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  ${(props) =>
    props.visible &&
    css`
      top: ${({ theme }) => theme.height.navbar.md};
    `}
`;

const pageNames = [
  "沿線価値向上プロジェクトとは",
  "お知らせ",
  "プロジェクト事例紹介",
  "note",
  "お問い合わせ",
];

const listItems = pageNames.map((name, i) => (
  <li key={i}>
    <a href="/">{name}</a>
  </li>
));

export const Menu = () => (
  <nav>
    <List>{listItems}</List>
  </nav>
);

export const DropdownMenu = (props) => (
  <nav>
    <DropdownList {...props}>{listItems}</DropdownList>
  </nav>
);
