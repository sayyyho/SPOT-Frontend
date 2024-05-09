import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import OnBoarding from './pages/OnBoarding';
import History from '@/pages/History/index.jsx';
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
        path: '/main',
        element: <Main />,
      },
      {
        path: '/login',
        element: <OnBoarding />,
      },
      {
        path: '/findKickSpot',
        element: <FindKickSpot />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
]);
