import React from 'react';

import Atoms from '../atoms';

export default function ListTitle(props) {
  const { brand, name } = props;

  return (
    <Atoms.ListTitleLayout>
      <Atoms.TextContent size='lg' variant='default'>
        {brand}
      </Atoms.TextContent>
      <Atoms.TextContent size='xlg' variant='default'>
        {name}
      </Atoms.TextContent>
    </Atoms.ListTitleLayout>
  );
}
