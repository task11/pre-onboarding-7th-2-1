import React from 'react';

import Atoms from '../atoms';
import Organisms from '../organisms';

export default function Detail(props) {
  const { children } = props;
  return (
    <Atoms.Main>
      <Organisms.DetailHeader />
      {children}
    </Atoms.Main>
  );
}
