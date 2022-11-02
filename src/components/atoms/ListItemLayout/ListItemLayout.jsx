import React from 'react';

import StyledListItemLayout from './ListItemLayout.style';

export default function ListItemLayout(props) {
  const { children } = props;

  return <StyledListItemLayout>{children}</StyledListItemLayout>;
}
