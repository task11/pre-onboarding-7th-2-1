import React from 'react';

import StyledBackButton from './BackButton.style';

import SIZES from './BackButton.variant';

export default function BackButton(props) {
  const { size } = props;
  const sizestyle = SIZES[size];

  return <StyledBackButton sizestyle={sizestyle} />;
}

BackButton.defaultProps = {
  size: SIZES.md
};
