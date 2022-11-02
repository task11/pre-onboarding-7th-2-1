import React from 'react';

import StyledCategoriesLayout from './CategoriesLayout.style';

export default function CategoriesLayout(props) {
  const { children } = props;

  return <StyledCategoriesLayout>{children}</StyledCategoriesLayout>;
}
