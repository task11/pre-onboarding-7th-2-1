import React from 'react';

import StyledListItem from './ListItem.style';

export default function ListItem(props) {
  const { children } = props;

  return <StyledListItem>{children}</StyledListItem>;
}
