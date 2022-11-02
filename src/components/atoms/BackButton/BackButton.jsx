import React from 'react';

import { StyledLink, StyledBackButton } from './BackButton.style';

import SIZES from './BackButton.variant';

export default function BackButton(props) {
  const { to, size, onClick } = props;
  const sizestyle = SIZES[size];

  return (
    <StyledLink to={to}>
      <StyledBackButton to={to} sizestyle={sizestyle} onClick={onClick} />
    </StyledLink>
  );
}

BackButton.defaultProps = {
  to: '/',
  size: SIZES.md,
  onClick: () => { }
};
