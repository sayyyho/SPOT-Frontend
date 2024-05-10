import {createGlobalStyle} from 'styled-components';
import Jua from '@/assets/font/Jua-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Jua';
    src: url(${Jua}) format('truetype');
    font-weight: normal;
  } 

  html {
    display: flex;
    justify-content: center;
    /* font-size: 16px; */
    overflow-x: hidden;
  }

  body, html {
    margin: 0;
    font-family: 'Jua';
    font-size: 16px;
  }

  body  {
    width: 393px;
    height: 852px;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0;
    margin-block-end: 0.8em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}
  #root {
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column
  }

  @media (max-width: 392px) {
    body {
      width: 100vw;
      height: 100vh;
    }
  }
`;
