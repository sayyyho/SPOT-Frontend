import {isAxiosError} from 'axios';
import {instance} from './axios';

export const getLoc = async (latitude, longitude) => {
  try {
    const response = await instance.get(`/api/district/location`, {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
