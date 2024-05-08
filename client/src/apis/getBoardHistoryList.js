import {isAxiosError} from "axios";
import {instance} from "./axios";

export const getBoardHistoryList = async () => {
  try {
    return await instance.get(`api/boarding-record`);
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
