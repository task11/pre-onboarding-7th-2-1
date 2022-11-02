import React from 'react';

import { checkLength } from '../../utils/constants/useful-functions';

import useGetCarList from '../../utils/hooks/useGetCarList';

import Organisms from '../organisms';
import Templates from '../templates';

export default function HomePage() {
  const {
    carList,
    selectedTags,
    isLoading,
    handleClickAllTag,
    handleClickFuelTypeTag,
    handleClickSegmentTag
  } = useGetCarList();

  return (
    <Templates.Home>
      <Organisms.Category
        selectedTags={selectedTags}
        handleClickAllTag={handleClickAllTag}
        handleClickSegmentTag={handleClickSegmentTag}
        handleClickFuelTypeTag={handleClickFuelTypeTag}
      />
      {isLoading ? (
        <>
          {!checkLength(carList) ? (
            <Organisms.EmptyList />
          ) : (
            carList.map(
              ({
                id,
                amount,
                createdAt,
                attribute: { brand, name, segment, fuelType, imageUrl }
              }) => (
                <Organisms.CardItem
                  key={id}
                  id={id}
                  brand={brand}
                  name={name}
                  segment={segment}
                  fuelType={fuelType}
                  amount={amount}
                  imageUrl={imageUrl}
                  createdAt={createdAt}
                />
              )
            )
          )}
        </>
      ) : (
        <Organisms.Loading />
      )}
    </Templates.Home>
  );
}
