import React from 'react';

import Atoms from '../../atoms';

export default function CardTitle(props) {
  const { brand, name, classType, fuelType, amount } = props;

  return (
    <Atoms.CardTitleLayout
      title={
        <>
          <Atoms.TextContent size='sm'>{brand}</Atoms.TextContent>
          <Atoms.TextContent size='sm'>{name}</Atoms.TextContent>
        </>
      }
      description={
        <>
          <Atoms.TextContent size='xsmLight'>
            {classType}
            {' / '}
            {fuelType}
          </Atoms.TextContent>
          <Atoms.TextContent size='xsmLight'>
            {`월 ${amount} 원 부터`}
          </Atoms.TextContent>
        </>
      }
    />
  );
}
