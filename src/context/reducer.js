export const inititalTagState = {
  id: 0,
  name: ''
};

export const carReducer = (state, action) => {
  switch (action.type) {
    case 'setCarList':
      return {
        ...state,
        carList: action.payload
      };
    case 'setCarDetail':
      return {
        ...state,
        carDetail: {
          ...state.carList.filter(
            (car) => String(car.id) === action.payload.detailId
          )[0]
        }
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
