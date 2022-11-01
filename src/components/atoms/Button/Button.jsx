import React from 'react';

import StyledButton from './Button.style';

import { SIZES, TYPES, VARIANTS } from './Button.variant';

export default function Button(props) {
  const { type, onClick, children, size, variant, disabled } = props;
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      type={type}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: TYPES.BUTTON,
  variant: VARIANTS.success,
  size: SIZES.md,
  onClick: () => {},
  disabled: false
};
