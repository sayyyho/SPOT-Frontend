import {ThemeProvider} from 'styled-components';
import {Outlet} from 'react-router-dom';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
