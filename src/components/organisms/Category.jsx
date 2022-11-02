import React from 'react';

import Atoms from '../atoms';

const tags = [
  {
    id: 1,
    name: '전체'
  },
  {
    id: 2,
    name: '대형'
  },
  {
    id: 3,
    name: '중형'
  },
  {
    id: 4,
    name: '소형'
  }
];

export default function Category() {
  return (
    <Atoms.CategoriesLayout>
      {tags.map((tag) => (
        <Atoms.Button
          key={tag.id}
          type='button'
          size='md'
          variants='default'
          isActive='false'
          onClick={() => {}}
        >
          {tag.name}
        </Atoms.Button>
      ))}
    </Atoms.CategoriesLayout>
  );
}
