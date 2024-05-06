import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
