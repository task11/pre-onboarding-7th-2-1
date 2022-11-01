import { css } from 'styled-components';

export const SIZES = {
  xsmLight: css`
    --textContent-font-size: 12px;
    --textContent-font-weight: 500;
  `,
  xsm: css`
    --textContent-font-size: 12px;
    --textContent-font-weight: 700;
  `,
  sm: css`
    --textContent-font-size: 14px;
    --textContent-font-weight: 700;
  `,
  mdLight: css`
    --textContent-font-size: 17px;
    --textContent-font-weight: 400;
  `,
  md: css`
    --textContent-font-size: 17px;
    --textContent-font-weight: 700;
  `,
  lg: css`
    --textContent-font-size: 20px;
    --textContent-font-weight: 700;
  `,
  xlg: css`
    --textContent-font-size: 24px;
    --textContent-font-weight: 700;
  `
};

export const VARIANTS = {
  default: css`
    --textContent-color: ${(props) => props.theme.textColor.default};
  `,
  accent: css`
    --textContent-color: ${(props) => props.theme.textColor.accent};
  `
};
