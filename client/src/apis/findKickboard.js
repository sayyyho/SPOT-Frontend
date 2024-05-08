import {isAxiosError} from 'axios';
import {instance} from './axios';

export const findKickboard = async () => {
  try {
    const response = await instance.get(`/api/kickboard`);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
