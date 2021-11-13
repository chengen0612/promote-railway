/** 
 * Mixin function accepts CSS expressions in JavaScript String type.
 * It transforms them into stylesheet using css module from styled components.
 * 
 * @param styles 'CSS expression'
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
 * Transform expressions into stylesheet with media query.
 * @param {Object} styles { breakpoint: 'CSS expression' }
 * @param {String} selector 'DOM Selector'
 * @returns {Stylesheet}
 */
export function mixinMediaQuery(styles, selector) {
  if (selector) return generateChildStyle(styles, selector);

  return generateSelfStyle(styles);
}