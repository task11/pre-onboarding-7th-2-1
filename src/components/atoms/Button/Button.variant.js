import { css } from 'styled-components';

export const TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit'
};

export const SIZES = {
  sm: css`
    --button-font-size: 12px;
    --button-padding: 4px 14px 3px 15px;
    --button-radius: 42px;
  `,
  md: css`
    --button-font-size: 14px;
    --button-padding: 5px 18px;
    --button-radius: 62px;
  `
};

export const VARIANTS = {
  default: css`
    --button-color: ${(props) => props.theme.textColor.default};
    --button-bg-color: ${(props) => props.theme.btnColor.default};
  `,
  active: css`
    --button-color: ${(props) => props.theme.textColor.accent};
    --button-bg-color: ${(props) => props.theme.btnColor.active};
  `,
  new: css`
    --button-color: ${(props) => props.theme.textColor.accent};
    --button-bg-color: ${(props) => props.theme.btnColor.accent};
    --button-position: absolute;
    --button-top: 8px;
    --button-right: 7px;
  `
};
