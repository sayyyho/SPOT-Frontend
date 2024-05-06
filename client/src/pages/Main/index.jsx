import React from 'react';

export const Main = () => {
  React.useEffect(() => {
    console.log(document.cookie);
  }, []);
  return (
    <div>
      <div>this is main</div>
    </div>
  );
};
