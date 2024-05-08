import {Route, Routes} from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import History from "@/pages/History/index.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
