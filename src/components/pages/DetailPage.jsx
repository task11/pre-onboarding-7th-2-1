import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCarDispatch, useCarSelector } from '../../context/CarProvider';

import { FUELTYPE, SEGMENT } from '../../utils/constants/constants';

import {
  addCommas,
  checkLength,
  formatDate
} from '../../utils/constants/useful-functions';

import Atoms from '../atoms';
import Molecules from '../molecules';
import Organisms from '../organisms';
import Templates from '../templates';

export default function Detail() {
  const { detailId } = useParams();
  const dispatch = useCarDispatch();
  const { carDetail } = useCarSelector();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    dispatch({
      type: 'setCarDetail',
      payload: {
        detailId
      }
    });
    setIsLoading(true);
    console.log(carDetail);
  }, []);

  return (
    <>
      {isLoading ? (
        <Templates.Detail>
          <Atoms.Image src={carDetail.attribute.imageUrl} size='md' />
          <Molecules.ListTitle
            brand={carDetail.attribute.brand}
            name={carDetail.attribute.name}
          />
          <Molecules.ListItem
            left=''
            right={`월 ${addCommas(carDetail.amount)}원`}
          />
          <Molecules.ListHeader>차량 정보</Molecules.ListHeader>
          <Molecules.ListItem
            left='차종'
            right={SEGMENT[carDetail.attribute.segment]}
          />
          <Molecules.ListItem
            left='연료'
            right={FUELTYPE[carDetail.attribute.fuelType]}
          />
          <Molecules.ListItem
            left='이용 가능일'
            right={`${formatDate(carDetail.startDate)} 부터`}
          />
          <Molecules.ListHeader>보험</Molecules.ListHeader>
          {carDetail.insurance.map(({ name, description }) => (
            <Molecules.ListItem left={name} right={description} />
          ))}
          {checkLength(carDetail.additionalProducts) && (
            <>
              <Molecules.ListHeader>추가상품</Molecules.ListHeader>
              {carDetail.additionalProducts.map(({ name, amount }) => (
                <Molecules.ListItem
                  left={name}
                  right={`월 ${addCommas(amount)}원`}
                />
              ))}
            </>
          )}
        </Templates.Detail>
      ) : (
        <Organisms.Loading />
      )}
    </>
  );
}
