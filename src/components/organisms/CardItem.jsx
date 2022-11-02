import React from 'react';
import { diffDate } from '../../utils/constants/useful-functions';

import Atoms from '../atoms';
import Molecules from '../molecules';

export default function CardItem(props) {
  const { id, brand, name, segment, fuelType, amount, imageUrl, createdAt } =
    props;

  return (
    <Atoms.CardItemLayout to={`/detail/${id}`}>
      <Molecules.CardTitle
        brand={brand}
        name={name}
        segment={segment}
        fuelType={fuelType}
        amount={amount}
      />
      {diffDate(createdAt) && (
        <Atoms.Button size='sm' variant='new'>
          신규
        </Atoms.Button>
      )}
      <Atoms.Image src={imageUrl} size='sm' alt={`the car ${name}'s image`} />
    </Atoms.CardItemLayout>
  );
}
