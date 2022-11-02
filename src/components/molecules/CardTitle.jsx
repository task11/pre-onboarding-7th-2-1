import React from 'react';

import { FUELTYPE, SEGMENT } from '../../utils/constants/constants';
import { addCommas } from '../../utils/constants/useful-functions';

import Atoms from '../atoms';

export default function CardTitle(props) {
  const { brand, name, segment, fuelType, amount } = props;

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
            {SEGMENT[segment]}
            {' / '}
            {FUELTYPE[fuelType]}
          </Atoms.TextContent>
          <Atoms.TextContent size='xsmLight'>
            {`월 ${addCommas(amount)} 원 부터`}
          </Atoms.TextContent>
        </>
      }
    />
  );
}
