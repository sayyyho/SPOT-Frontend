import {isAxiosError} from 'axios';
import {instance} from './axios';

export const findKickboard = async () => {
  try {
    const response = await instance.get(`/api/kickboard`, {
      params: {
        lat: 37.563522165046,
        lon: 126.99917408401,
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
