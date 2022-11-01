import React from 'react';

import StyledBackButton from './BackButton.style';

import SIZES from './BackButton.variant';

export default function BackButton(props) {
  const { size, onClick } = props;
  const sizestyle = SIZES[size];

  return <StyledBackButton sizestyle={sizestyle} onClick={onClick} />;
}

BackButton.defaultProps = {
  size: SIZES.md,
  onClick: () => {}
};
