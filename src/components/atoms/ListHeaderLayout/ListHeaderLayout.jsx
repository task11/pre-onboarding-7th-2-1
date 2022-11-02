import React from 'react';

import StyledListHeaderLayout from './ListHeaderLayout.style';

export default function ListHeaderLayout(props) {
  const { children } = props;

  return <StyledListHeaderLayout>{children}</StyledListHeaderLayout>;
}
