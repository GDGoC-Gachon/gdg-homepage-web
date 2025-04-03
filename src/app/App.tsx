import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayOut from '../widgets/MainLayOut';
import MainPage from '../pages/MainPage';
import JoinPage from '../pages/JoinPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';
import SignupStep1Page from '../pages/SignupStep1Page';
import SignupStep2Page from '../pages/SignupStep2Page';
import SignupSubmitPage from '../pages/SignupSubmitPage';
import LoginPage from '../pages/LoginPage';
import FindPasswordPage from '../pages/FindPasswordPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import SignupPending from '../pages/SignupPendingPage';

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
        <Route path='/signup/step1' element={<SignupStep1Page />} />
        <Route path='/signup/step2' element={<SignupStep2Page />} />
        <Route path='/signup/submit' element={<SignupSubmitPage />} />
        <Route path='/signup/pending' element={<SignupPending />} />

        {/* 로그인 페이지 */}
        <Route path='/login' element={<LoginPage />} />

        {/* 비밀번호 찾기, 수정 페이지 */}
        <Route path='/find-password' element={<FindPasswordPage />} />
        <Route path='/change-password' element={<ChangePasswordPage />} />

      </Route>
    </Routes>
  );
}

export default App;
