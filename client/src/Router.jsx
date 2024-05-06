import {Route, Routes} from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
    </Routes>
  );
}
