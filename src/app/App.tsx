import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayOut from '../widgets/MainLayOut';
import MainPage from '../pages/MainPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';

function App() {
  return (
    <Routes>
      {/* 메인 레이아웃 적용 */}
      <Route element={<MainLayOut />}>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 모집 페이지 */}
        <Route path="/recruitment" element={<MainPage />} />

        {/* FAQ 페이지 */}
        <Route path="/faq" element={<FAQPage />} />

        {/* 컨택트 페이지 */}
        <Route path="/contact" element={<ContactPage />} />

      </Route>
    </Routes>
  );
}

export default App;
