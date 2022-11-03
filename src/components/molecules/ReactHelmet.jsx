import React from 'react';

import { Helmet } from 'react-helmet-async';

export default function ReactHelmet(props) {
  const { title, description, imageUrl } = props;

  return (
    <Helmet>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
    </Helmet>
  );
}
