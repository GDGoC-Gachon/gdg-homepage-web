import { useNavigate, useLocation } from 'react-router-dom';
import LogoImg from '../assets/images/common/logo.png';

function Header() {
  // navigate, location
  const navigate = useNavigate();
  const location = useLocation();

  // 버튼 스타일에 동적으로 active 클래스 추가
  const getButtonStyle = (path: string): string =>
    location.pathname === path
      ? 'btn-underline ml-16 font-productSans text-mainRed'
      : 'btn-underline ml-16 font-productSans';

  return (
    <div className="fixed w-full h-header bg-mainWhite flex items-center z-50">
      <img
        className="mx-12 h-7 cursor-pointer"
        src={LogoImg}
        alt="logo image"
        onClick={() => navigate('/')}
      />
      <button className={getButtonStyle('/')} onClick={() => navigate('/')}>
        Introduce
      </button>
      <button
        className={getButtonStyle('/recruitment')}
        onClick={() => navigate('/recruitment')}
      >
        Recruitment
      </button>
      <button
        className={getButtonStyle('/faq')}
        onClick={() => navigate('/faq')}
      >
        FAQ
      </button>
      <button
        className={getButtonStyle('/contact')}
        onClick={() => navigate('/contact')}
      >
        Contact
      </button>
    </div>
  );
}

export default Header;