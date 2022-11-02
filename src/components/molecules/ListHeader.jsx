import React from 'react';

import Atoms from '../atoms';

export default function ListHeader(props) {
  const { children } = props;

  return (
    <Atoms.ListHeaderLayout>
      <Atoms.TextContent size='md' variant='accent'>
        {children}
      </Atoms.TextContent>
    </Atoms.ListHeaderLayout>
  );
}
