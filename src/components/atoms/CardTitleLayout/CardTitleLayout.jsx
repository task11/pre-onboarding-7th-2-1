import React from 'react';

import {
  StyledCardTitleLayout,
  StyledDescription
} from './CardTitleLayout.style';

export default function CardTitleLayout(props) {
  const { title, description } = props;

  return (
    <StyledCardTitleLayout>
      <StyledDescription>{title}</StyledDescription>
      <StyledDescription>{description}</StyledDescription>
    </StyledCardTitleLayout>
  );
}

CardTitleLayout.defaultProps = {
  title: '',
  description: ''
};
