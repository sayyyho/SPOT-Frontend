import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import OnBoarding from './pages/OnBoarding';
import FindKickSpot from './pages/FindKickSpot';
import {Main} from './pages/Main';
import {loader} from './constant/mainLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
        loader: loader,
      },
      {
        path: '/login',
        element: <OnBoarding />,
      },
      {
        path: '/login',
        element: <FindKickSpot />,

      }
    ],
  },
]);
