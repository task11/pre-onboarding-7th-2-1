import React from 'react';

import StyledListHeader from './ListHeader.style';

export default function ListHeader(props) {
  const { children } = props;

  return <StyledListHeader>{children}</StyledListHeader>;
}
