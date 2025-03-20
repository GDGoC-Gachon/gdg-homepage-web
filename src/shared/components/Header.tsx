import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useDevice from '../hooks/useDevice';
import LogoImg from '../assets/images/common/logo.png';
import { ReactComponent as MenuIcon } from '../assets/icons/common/menuIcon.svg';
import { ReactComponent as CancelIcon } from '../assets/icons/common/cancelIcon.svg';

function Header() {
  // state 관리
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  // 메뉴바 참조를 위한 ref
  const menuRef = useRef<HTMLDivElement | null>(null);

  // navigate, location
  const navigate = useNavigate();
  const location = useLocation();

  // join 버튼 스타일
  const joinPaths = ["/join", "/signup/step1", "/signup/step2", "/signup/step3", "/signup/submit"];
  const join = joinPaths.includes(location.pathname);

  // 버튼 스타일에 동적으로 active 클래스 추가
  const getButtonStyle = (path: string, type: string): string => {
    const isActive = path === location.pathname || (path === "/join" && join);

    if (type === "pc") {
      return `btn-underline ml-16 font-productSans ${
        isActive ? "text-mainRed" : "text-black"
      } text-base text-sm lg:text-base`;
    } else {
      return `btn-underline mb-10 font-productSans ${
        isActive ? "text-mainRed" : "text-black"
      } text-base`;
    }
  };

  // 반응형 함수
  const { isDesktop, isTablet, isMobile } = useDevice();

  // 메뉴 열고 닫기
  const handleMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  // 화면 크기가 변경 시 메뉴 닫기
  useEffect(() => {
    if (!isMobile) {
      setIsVisibleMenu(false);
    }
  }, [isMobile, isTablet, isDesktop]);

  // 메뉴바 오픈 시 스크롤 방지
  useEffect(() => {
    if (isVisibleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisibleMenu]);

  // 페이지 이동
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsVisibleMenu(false);
  };

  return (
    <>
      <div className="fixed px-12 w-full h-header bg-mainWhite flex items-center justify-between z-50">
        {/* PC, 테블릿 화면 */}
        {!isMobile && (
          <>
            <div className="flex items-center">
              <img
                className="mr-12 h-6 cursor-pointer lg:h-7"
                src={LogoImg}
                alt="logo image"
                onClick={() => navigate('/')}
              />
              <button className={getButtonStyle('/', 'pc')} onClick={() => navigate('/')}>
                Introduce
              </button>
              <button className={getButtonStyle('/join', 'pc')} onClick={() => navigate('/join')}>
                Joining
              </button>
              <button className={getButtonStyle('/faq', 'pc')} onClick={() => navigate('/faq')}>
                FAQ
              </button>
              <button className={getButtonStyle('/contact', 'pc')} onClick={() => navigate('/contact')}>
                Contact
              </button>
            </div>
            <button className={getButtonStyle('/login', 'pc')} onClick={() => navigate('/login')}>
              Login
            </button>
          </>
        )}

        {/* 모바일 화면 */}
        {isMobile && (
          <div className="w-full flex justify-between items-center">
            <img className="ml-12 h-6 cursor-pointer" src={LogoImg} alt="logo image" onClick={() => navigate('/')} />
            {isVisibleMenu ? (
              <CancelIcon className="mr-14 w-5 cursor-pointer" onClick={() => handleMenu()} />
            ) : (
              <MenuIcon className="mr-12 w-5 cursor-pointer" onClick={() => handleMenu()} />
            )}
          </div>
        )}
      </div>

      {/* 모바일 메뉴 화면 */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-40 backdrop-blur-xl
            transition-all duration-300 ease-in-out
            ${isVisibleMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          ref={menuRef}
        >
          <button className={getButtonStyle('/', 'mobile')} onClick={() => handleNavigation('/')}>
            Introduce
          </button>
          <button className={getButtonStyle('/join', 'mobile')} onClick={() => handleNavigation('/join')}>
            Joining
          </button>
          <button className={getButtonStyle('/faq', 'mobile')} onClick={() => handleNavigation('/faq')}>
            FAQ
          </button>
          <button className={getButtonStyle('/contact', 'mobile')} onClick={() => handleNavigation('/contact')}>
            Contact
          </button>
          <button className={getButtonStyle('/login', 'mobile')} onClick={() => handleNavigation('/login')}>
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
