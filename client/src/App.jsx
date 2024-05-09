import {ThemeProvider} from 'styled-components';
import {Outlet} from 'react-router-dom';
import theme from './theme';
import {Wrapper} from './components/Common/Wrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
