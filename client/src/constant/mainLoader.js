import {redirect} from 'react-router-dom';

export const loader = () => {
  if (document.cookie === null || document.cookie === '') {
    return redirect('/login');
  }
  return null;
};
