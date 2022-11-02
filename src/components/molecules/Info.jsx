import React from 'react';

import Atoms from '../atoms';

export default function Info(props) {
  const { children } = props;

  return (
    <Atoms.InfoLayout>
      <Atoms.TextContent size='md' variant='default'>
        {children}
      </Atoms.TextContent>
    </Atoms.InfoLayout>
  );
}
