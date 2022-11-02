import React from 'react';

import StyledCardItemLayout from './CardItemLayout.style';

export default function CardItemLayout(props) {
  const { to, children, onClick } = props;

  return (
    <StyledCardItemLayout to={to} onClick={onClick}>
      {children}
    </StyledCardItemLayout>
  );
}

CardItemLayout.defaultProps = {
  onClick: () => {}
};
