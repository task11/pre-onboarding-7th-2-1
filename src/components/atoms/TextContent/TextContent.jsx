import React from 'react';

import StyledTextContent from './TextContent.style';
import { SIZES, VARIANTS } from './TextContent.variant';

export default function TextContent(props) {
  const { children, size, variant } = props;
  const sizestyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledTextContent sizestyle={sizestyle} variantStyle={variantStyle}>
      {children}
    </StyledTextContent>
  );
}

TextContent.defaultProps = {
  variant: VARIANTS.default,
  size: SIZES.md
};
