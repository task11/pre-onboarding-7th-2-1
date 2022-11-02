import React from 'react';

import StyledListTitleLayout from './ListTitleLayout.style';

export default function ListTitleLayout(props) {
  const { children } = props;

  return <StyledListTitleLayout>{children}</StyledListTitleLayout>;
}
