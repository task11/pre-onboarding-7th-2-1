import React from 'react';

import StyledCardItemLayout from './CardItemLayout.style';

export default function CardItemLayout(props) {
  const { children, onClick } = props;

  return (
    <StyledCardItemLayout onClick={onClick}>{children}</StyledCardItemLayout>
  );
}

CardItemLayout.defaultProps = {
  onClick: () => {}
};
