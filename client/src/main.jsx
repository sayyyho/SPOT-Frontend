import ReactDOM from 'react-dom/client';
import {GlobalStyle} from './style.js';
import {RouterProvider} from 'react-router-dom';
import {router} from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <GlobalStyle />
  </>,
);
