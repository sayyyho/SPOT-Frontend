import {isAxiosError} from 'axios';
import {instance} from './axios';

export const login = async () => {
  try {
    const response = await instance.post(`/api/auth/reissue`, null);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
