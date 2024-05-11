import {isAxiosError} from 'axios';
import {instance} from './axios';

export const spotUpload = async (imageFile) => {
  try {
       const data = {
      distance: 1.2,
      time: 10,
    };
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('dto', blob);
    const response = await instance.post(`/api/boarding-record`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
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
