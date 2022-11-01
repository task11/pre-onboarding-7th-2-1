import React from 'react';

import StyledHeader from './Header.style';

import SIZES from './Header.variant';

export default function Header(props) {
  const { children, size } = props;
  const sizestyle = SIZES[size];

  return <StyledHeader sizestyle={sizestyle}>{children}</StyledHeader>;
}

Header.defaultProps = {
  size: SIZES.md
};
