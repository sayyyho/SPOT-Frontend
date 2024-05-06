import { isAxiosError } from "axios";
import { instance } from "./axios";

export const login = async () => {
  try {
    const response = await instance.post(`oauth2/authorization/kakao`, null);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
