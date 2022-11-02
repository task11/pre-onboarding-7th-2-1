import React from 'react';

import StyledMain from './Main.styled';

export default function Main(props) {
  const { children } = props;

  return <StyledMain>{children}</StyledMain>;
}
