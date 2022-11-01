import React from 'react';

import StyledImage from './Image.style';

import SIZES from './Image.variant';

export default function Image(props) {
  const { src, size, alt } = props;
  const sizestyle = SIZES[size];

  return <StyledImage src={src} sizestyle={sizestyle} alt={alt} />;
}

Image.defaultProps = {
  src: '',
  size: 'sm',
  alt: 'image not found'
};
