import {Button} from '@/components/Button';
import React from 'react';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('access_token');

export const Main = () => {
  React.useEffect(() => {
    console.log(accessToken);
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
