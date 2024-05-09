import {isAxiosError} from 'axios';
import {instance} from './axios';

export const getTempHum = async (latitude, longitude) => {
  try {
    const response = await instance.get(`/api/district/temperature`, {
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
