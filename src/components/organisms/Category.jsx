import React from 'react';

import {
  ALL_TAG,
  FUELTYPE_TAGS,
  SEGMENT_TAGS
} from '../../utils/constants/constants';

import Atoms from '../atoms';

export default function Category(props) {
  const {
    selectedTags,
    handleClickAllTag,
    handleClickSegmentTag,
    handleClickFuelTypeTag
  } = props;

  return (
    <Atoms.CategoriesLayout>
      <Atoms.Button
        type='button'
        size='md'
        variant={selectedTags.isFilterd ? 'default' : 'active'}
        onClick={() => handleClickAllTag()}
        isActive='true'
      >
        {ALL_TAG.name}
      </Atoms.Button>
      {SEGMENT_TAGS.map((tag) => (
        <Atoms.Button
          key={tag.id}
          type='button'
          size='md'
          variant={tag.id === selectedTags.segmentTag.id ? 'active' : 'default'}
          onClick={() => handleClickSegmentTag(tag)}
          isActive='true'
        >
          {tag.name}
        </Atoms.Button>
      ))}
      {FUELTYPE_TAGS.map((tag) => (
        <Atoms.Button
          key={tag.id}
          type='button'
          size='md'
          variant={
            tag.id === selectedTags.fuelTypeTag.id ? 'active' : 'default'
          }
          onClick={() => handleClickFuelTypeTag(tag)}
          isActive='true'
        >
          {tag.name}
        </Atoms.Button>
      ))}
    </Atoms.CategoriesLayout>
  );
}
