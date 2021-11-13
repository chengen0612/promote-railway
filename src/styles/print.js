/**
 * Printer function accepts stylesheet create by css module as parameter.
 * It processes incomplete stylesheet and return the result as a completed version.
 * Each printer function must has at least one stylesheet as input value.
 * 
 * @param stylesheet { key: css` CSS expressions; `, }
 */

import { css } from "styled-components";
import { breakpoints } from "./theme";

const generateSelfStyle = (stylesheet) => css`
  ${stylesheet.sm && stylesheet.sm};
  @media screen and (min-width: ${breakpoints.md}) {
    ${stylesheet.md && stylesheet.md};
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    ${stylesheet.lg && stylesheet.lg};
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    ${stylesheet.xl && stylesheet.xl};
  }
`;

const generateChildStyle = (stylesheet, selector) => css`
  ${selector} {
    ${generateSelfStyle(stylesheet)}
  }
`;

/**
 * Wrap stylesheet with media query expressions.
 * @param {Object} styles { breakpoint: 'stylesheet' }
 * @param {String} selector 'DOM Selector'
 * @returns {Stylesheet}
 */
export function printMediaQuery(stylesheet, selector) {
  if (selector) return generateChildStyle(stylesheet, selector);

  return generateSelfStyle(stylesheet);
}
