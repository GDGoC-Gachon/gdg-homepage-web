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
import MemberLayOut from '../widgets/MemberLayOut';
import MemberMainPage from '../pages/MemberMainPage';
import MemberAnalyzePage from '../pages/MemberAnalyzePage';
import MemberJoinPage from '../pages/MemberJoinPage';
import MemberManagementPage from '../pages/MemberManagementPage';
import MemberFaqPage from '../pages/MemberFaqPage';

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

      {/* 멤버 레이아웃 적용 */}
      <Route element={<MemberLayOut />}>
        {/* 멤버 메인 페이지 */}
        <Route path='/member/home' element={<MemberMainPage />} />

        {/* 멤버 분석 페이지 */}
        <Route path='/member/analyze' element={<MemberAnalyzePage />} />

        {/* 멤버 가입 페이지 */}
        <Route path='/member/join' element={<MemberJoinPage />} />

        {/* 멤버 회원 페이지 */}
        <Route path='/member/management' element={<MemberManagementPage />} />

        {/* 멤버 설정 페이지 */}
        <Route path='/member/faq' element={<MemberFaqPage />} />
      </Route>
    </Routes>
  );
}

export default App;
