import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayOut from '../widgets/MainLayOut';
import MainPage from '../pages/MainPage';
import JoinPage from '../pages/JoinPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';
import SignupStep1 from '../pages/SignupStep2';

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
        <Route path='/signup/step1' element={<SignupStep1 />} />
        <Route path='/signup/step2' element={<SignupStep1 />} />
        <Route path='/signup/step3' element={<SignupStep1 />} />
        <Route path='/signup/submit' element={<SignupStep1 />} />

        {/* 로그인 페이지 */}
        <Route path='/login' element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
