import React from 'react';

import Atoms from '../atoms';
import Organisms from '../organisms';

export default function Home(props) {
  const { children } = props;
  return (
    <Atoms.Main>
      <Organisms.MainHeader />
      {children}
    </Atoms.Main>
  );
}
