import React from 'react';
import {findKickboard} from '@/apis/findKickboard';
import {Button} from '@/components/Button';

export const Main = () => {
  React.useEffect(() => {
    // gps 요청 -> lat, lan 가져오면 -> 변수 넣어서 -> api 요청하고 -> res를 가지고 있기.
    const getData = async () => {
      const res = await findKickboard();
      console.log(res);
    };
    getData();
  }, []);
  return (
    <div>
      <Button
        width="90%"
        height="40%"
        radius="10px 10px 10px 10px"
        background="gray"
      ></Button>
    </div>
  );
};
