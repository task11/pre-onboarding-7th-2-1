import React from 'react';

import StyledButton from './Button.style';

import { SIZES, TYPES, VARIANTS } from './Button.variant';

export default function Button(props) {
  const { type, onClick, children, size, variant, disabled, isActive } = props;
  const sizestyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      type={type}
      sizestyle={sizestyle}
      variantStyle={variantStyle}
      onClick={onClick}
      disabled={disabled}
      isActive={isActive}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: TYPES.BUTTON,
  variant: VARIANTS.default,
  size: SIZES.md,
  onClick: () => {},
  disabled: false,
  isActive: true
};
