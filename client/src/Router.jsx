import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import OnBoarding from './pages/OnBoarding';
import History from '@/pages/History/index.jsx';
import FinishSpot from './pages/FinishSpot';
import {Main} from './pages/Main';
import {loader} from './constant/mainLoader';
import {FindSpot} from './pages/FindSpot';
import Find_1 from './components/Common/Find_1';

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
        path: '/findSpot',
        element: <FindSpot />,
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: '/finishSpot',
        element: <FinishSpot />,
      },
      {
        path: '/finishSpot_1',
        element: <Find_1 />,
      },
    ],
  },
]);
