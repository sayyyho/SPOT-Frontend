import {useEffect, useState} from 'react';
import {getBoardHistoryList} from '@/apis/getBoardHistoryList.js';

export const useBoardHistory = () => {
  const [boardHistoryListValue, setBoardHistoryListValue] = useState([]);
  const [personInfo, setPersonInfo] = useState({});

  useEffect(() => {
    getBoardHistoryList()
      .then((res) => {
        console.log(res);
        setBoardHistoryListValue(res.data.data.records);
        setPersonInfo(res.data.data.person);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {boardHistoryListValue, personInfo};
};
