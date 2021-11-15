/** 
 * Mixin function accepts CSS expressions as input value.
 * Expressions can be string or template generated by styled-components CSS module. 
 * Mixin transforms them into stylesheet using CSS module and return the result.
 */

import { css } from "styled-components";
import { breakpoints } from "./theme";

const generateSelfStyle = (styles) => css`
  ${styles.sm && styles.sm};
  @media screen and (min-width: ${breakpoints.md}) {
    ${styles.md && styles.md};
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    ${styles.lg && styles.lg};
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    ${styles.xl && styles.xl};
  }
`;

const generateChildStyle = (styles, selector) => css`
  ${selector} {
    ${generateSelfStyle(styles)}
  }
`;

/**
 * Generate stylesheet with media query.
 * @param {Object} styles { breakpoint: 'CSS expression' }
 * @param {String} selector 'CSS Selector'
 * @returns {Stylesheet}
 */
export function mixinMediaQuery(styles, selector) {
  if (selector) return generateChildStyle(styles, selector);

  return generateSelfStyle(styles);
}