import { css } from 'styled-components';

export const TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit'
};

export const SIZES = {
  sm: css`
    --button-font-size: 1.2rem;
    --button-padding: 4px 14px 3px 15px;
    --button-radius: 42px;
  `,
  md: css`
    --button-font-size: 1.4rem;
    --button-padding: 5px 18px;
    --button-radius: 62px;
  `
};

export const VARIANTS = {
  default: css`
    --button-color: #000000;
    --button-bg-color: #D9D9D9;
  `,
  active: css`
    --button-color: #FFFFFF;
    --button-bg-color: #000000;
    `,
  new: css`
    --button-color: #FFFFFF;
    --button-bg-color: #0094FF;
  `
};
