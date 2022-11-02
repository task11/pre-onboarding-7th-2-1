import React from 'react';

import Atoms from '../atoms';

export default function DetailHeader() {
  return (
    <Atoms.Header>
      <Atoms.TextContent size='md'>차량상세</Atoms.TextContent>
      <Atoms.BackButton to='/' />
    </Atoms.Header>
  );
}
