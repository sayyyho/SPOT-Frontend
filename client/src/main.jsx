import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {GlobalStyle} from './style.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
