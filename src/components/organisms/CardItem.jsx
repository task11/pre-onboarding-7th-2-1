import React from 'react';

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
      <Atoms.Image src={imageUrl} size='sm' alt={`the car ${name}'s image`} />
    </Atoms.CardItemLayout>
  );
}
