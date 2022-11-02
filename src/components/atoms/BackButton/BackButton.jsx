import React from 'react';

import { Link } from 'react-router-dom';

import StyledBackButton from './BackButton.style';

import SIZES from './BackButton.variant';

export default function BackButton(props) {
  const { to, size, onClick } = props;
  const sizestyle = SIZES[size];

  return (
    <Link to={to}>
      <StyledBackButton to={to} sizestyle={sizestyle} onClick={onClick} />
    </Link>
  );
}

BackButton.defaultProps = {
  to: '/',
  size: SIZES.md,
  onClick: () => {}
};
