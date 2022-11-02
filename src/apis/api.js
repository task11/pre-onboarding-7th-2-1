import { FUELTYPE_EN, SEGMENT_EN } from '../utils/constants/constants';
import client from '../utils/lib/axios';

const API = {
  async getCars({ segment, fuelType }) {
    const convertSegment = SEGMENT_EN[segment] || '';
    const convertFuelType = FUELTYPE_EN[fuelType] || '';
    const result = await client.get(
      `/cars?fuelType=${convertFuelType}&segment=${convertSegment}`
    );

    return result.data;
  }
};

export default API;
