import React, { createContext, useContext, useReducer } from 'react';

const inititalTagState = {
  id: 0,
  name: ''
};

const initialState = {
  carList: [],
  carDetail: {},
  selectedTags: {
    segmentTag: inititalTagState,
    fuelTypeTag: inititalTagState,
    isFilterd: false
  }
};

const carReducer = (state, action) => {
  switch (action.type) {
    case 'setCarList':
      return {
        ...state,
        carList: action.payload
      };
    case 'setCarDetail':
      return {
        ...state,
        carDetail: action.payload
      };
    case 'setSegmentTag':
      if (state.selectedTags.segmentTag.id === action.payload.id) {
        return {
          ...state,
          selectedTags: {
            ...state.selectedTags,
            segmentTag: inititalTagState,
            isFilterd: !!state.selectedTags.fuelTypeTag.name
          }
        };
      }

      return {
        ...state,
        selectedTags: {
          ...state.selectedTags,
          segmentTag: action.payload,
          isFilterd: true
        }
      };
    case 'setFuelTypeTag':
      if (state.selectedTags.fuelTypeTag.id === action.payload.id) {
        return {
          ...state,
          selectedTags: {
            ...state.selectedTags,
            fuelTypeTag: inititalTagState,
            isFilterd: !!state.selectedTags.segmentTag.name
          }
        };
      }

      return {
        ...state,
        selectedTags: {
          ...state.selectedTags,
          fuelTypeTag: action.payload,
          isFilterd: true
        }
      };
    case 'setAllTag':
      return {
        ...state,
        selectedTags: {
          segmentTag: inititalTagState,
          fuelTypeTag: inititalTagState,
          isFilterd: false
        }
      };
    default:
      return false;
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
