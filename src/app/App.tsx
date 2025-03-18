import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayOut from '../widgets/MainLayOut';
import MainPage from '../pages/MainPage';
import JoinPage from '../pages/JoinPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';

function App() {
  return (
    <Routes>
      {/* 메인 레이아웃 적용 */}
      <Route element={<MainLayOut />}>
        {/* 메인 페이지 */}
        <Route path='/' element={<MainPage />} />

        {/* 모집 페이지 */}
        <Route path='/join' element={<JoinPage />} />

        {/* FAQ 페이지 */}
        <Route path='/faq' element={<FAQPage />} />

        {/* 컨택트 페이지 */}
        <Route path='/contact' element={<ContactPage />} />

        {/* 회원가입 페이지 */}
        <Route path='/signup/step1' element={<MainPage />} />
        <Route path='/signup/step2' element={<MainPage />} />
        <Route path='/signup/step3' element={<MainPage />} />
        <Route path='/signup/submit' element={<MainPage />} />

        {/* 로그인 페이지 */}
        <Route path='/login' element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
