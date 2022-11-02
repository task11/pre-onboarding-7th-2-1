import React from 'react';

import Atoms from '../../atoms';

export default function ListItem(props) {
  const { left, right } = props;

  return (
    <Atoms.ListItemLayout>
      <Atoms.TextContent size='md' variant='default'>
        {left}
      </Atoms.TextContent>
      <Atoms.TextContent size='mdLight' variant='default'>
        {right}
      </Atoms.TextContent>
    </Atoms.ListItemLayout>
  );
}
