import { useCallback, useEffect, useState } from 'react';

import { useCarDispatch, useCarSelector } from '../../context/CarProvider';

import API from '../../apis/api';

export default function useGetCarList() {
  const dispatch = useCarDispatch();
  const { carList, selectedTags } = useCarSelector();
  const [isLoading, setIsLoading] = useState(false);

  const getCars = useCallback(async () => {
    try {
      const data = await API.getCars({
        segment: selectedTags.segmentTag.name,
        fuelType: selectedTags.fuelTypeTag.name
      });
      const { payload } = data;
      dispatch({ type: 'setCarList', payload });
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  });

  const handleClickSegmentTag = useCallback((tag) => {
    setIsLoading(false);
    dispatch({ type: 'setSegmentTag', payload: tag });
  }, []);

  const handleClickFuelTypeTag = useCallback((tag) => {
    setIsLoading(false);
    dispatch({ type: 'setFuelTypeTag', payload: tag });
  });

  const handleClickAllTag = useCallback(() => {
    setIsLoading(false);
    dispatch({ type: 'setAllTag' });
  });

  useEffect(() => {
    getCars();
  }, [
    selectedTags.isFilterd,
    selectedTags.segmentTag.id,
    selectedTags.fuelTypeTag.id
  ]);

  return {
    carList,
    selectedTags,
    isLoading,
    handleClickAllTag,
    handleClickFuelTypeTag,
    handleClickSegmentTag
  };
}
