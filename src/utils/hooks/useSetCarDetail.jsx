import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCarDispatch, useCarSelector } from '../../context/CarProvider';

export default function useSetCarDetail() {
  const { detailId } = useParams();
  const dispatch = useCarDispatch();
  const { carDetail } = useCarSelector();
  const [isLoading, setIsLoading] = useState(false);

  const setCarDetail = useCallback(() => {
    dispatch({
      type: 'setCarDetail',
      payload: {
        detailId
      }
    });
  }, [carDetail.id]);

  useEffect(() => {
    setIsLoading(false);
    setCarDetail();
    setIsLoading(true);
  }, []);

  return { carDetail, isLoading };
}
