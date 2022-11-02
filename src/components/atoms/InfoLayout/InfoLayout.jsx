import React from 'react';

import StyledInfoLayout from './InfoLayout.style';

export default function InfoLayout(props) {
  const { children } = props;

  return <StyledInfoLayout>{children}</StyledInfoLayout>;
}
