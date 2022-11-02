import React, { createContext, useContext, useReducer } from 'react';

import { inititalTagState, carReducer } from './reducer';

const initialState = {
  carList: [],
  carDetail: {},
  selectedTags: {
    segmentTag: inititalTagState,
    fuelTypeTag: inititalTagState,
    isFilterd: false
  }
};

const CarStateContext = createContext(initialState);
const CarDispatchContext = createContext(null);

export function CarProvider({ children }) {
  const [state, dispatch] = useReducer(carReducer, initialState);
  return (
    <CarStateContext.Provider value={state}>
      <CarDispatchContext.Provider value={dispatch}>
        {children}
      </CarDispatchContext.Provider>
    </CarStateContext.Provider>
  );
}

export const useCarSelector = () => {
  const state = useContext(CarStateContext);
  return state;
};

export const useCarDispatch = () => {
  const dispatch = useContext(CarDispatchContext);
  return dispatch;
};
