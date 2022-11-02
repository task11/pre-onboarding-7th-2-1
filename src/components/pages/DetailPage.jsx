import React from 'react';
import { FUELTYPE, SEGMENT } from '../../utils/constants/constants';
import {
  addCommas,
  checkLength,
  formatDate
} from '../../utils/constants/useful-functions';

import Atoms from '../atoms';
import Molecules from '../molecules';
import Templates from '../templates';

const payload = {
  id: 1,
  startDate: '2022-11-02T13:07:45.534Z',
  createdAt: '2022-11-02T13:07:45.534Z',
  attribute: {
    brand: '현대',
    name: '아반떼 CN7',
    segment: 'C',
    fuelType: 'gasoline',
    imageUrl: 'https://interview.platdev.net/avantecn7.png'
  },
  amount: 600000,
  insurance: [
    {
      name: '대인',
      description: '무한'
    },
    {
      name: '대물',
      description: '10억'
    }
  ],
  additionalProducts: [
    {
      name: '하이파킹 주차권',
      amount: 150000
    }
  ]
};

export default function Detail() {
  return (
    <Templates.Detail>
      <Atoms.Image src={payload.attribute.imageUrl} size='md' />
      <Molecules.ListTitle
        brand={payload.attribute.brand}
        name={payload.attribute.name}
      />
      <Molecules.ListItem left='' right={`월 ${addCommas(payload.amount)}원`} />
      <Molecules.ListHeader>차량 정보</Molecules.ListHeader>
      <Molecules.ListItem
        left='차종'
        right={SEGMENT[payload.attribute.segment]}
      />
      <Molecules.ListItem
        left='연료'
        right={FUELTYPE[payload.attribute.fuelType]}
      />
      <Molecules.ListItem
        left='이용 가능일'
        right={`${formatDate(payload.startDate)} 부터`}
      />
      <Molecules.ListHeader>보험</Molecules.ListHeader>
      {payload.insurance.map(({ name, description }) => (
        <Molecules.ListItem left={name} right={description} />
      ))}
      <Molecules.ListHeader>추가상품</Molecules.ListHeader>
      {checkLength(payload.additionalProducts) &&
        payload.additionalProducts.map(({ name, amount }) => (
          <Molecules.ListItem left={name} right={`월 ${addCommas(amount)}원`} />
        ))}
    </Templates.Detail>
  );
}
