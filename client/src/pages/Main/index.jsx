import React from 'react';
import {findKickboard} from '@/apis/findKickboard';
import {Button} from '@/components/Button';

export const Main = () => {
  React.useEffect(() => {
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
