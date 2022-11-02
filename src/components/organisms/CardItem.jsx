import React from 'react';

import Atoms from '../atoms';
import Molecules from '../molecules';

export default function CardItem(props) {
  const { brand, name, classType, fuelType, amount, imageURL } = props;

  return (
    <Atoms.CardItemLayout>
      <Molecules.CardTitle
        brand={brand}
        name={name}
        classType={classType}
        fuelType={fuelType}
        amount={amount}
      />
      <Atoms.Image src={imageURL} size='sm' alt={`the car ${name}'s image`} />
    </Atoms.CardItemLayout>
  );
}
