import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/images/common/logo.png';

function Header() {
  // navigate
  const navigate = useNavigate();

  return (
    <div className="fixed w-full h-header bg-mainWhite flex items-center z-50">
      <img className="mx-12 h-7 cursor-pointer" src={LogoImg} alt="logo image" onClick={() => navigate('/')} />
      <button
        className="ml-16 font-productSans hover:text-mainRed transition-all duration-200 ease-in-out"
        onClick={() => navigate('/')}
      >
        Introduce
      </button>
      <button
        className="ml-16 font-productSans hover:text-mainRed transition-all duration-200 ease-in-out"
        onClick={() => navigate('/recruitment')}
      >
        Recruitment
      </button>
      <button
        className="ml-16 font-productSans hover:text-mainRed transition-all duration-200 ease-in-out"
        onClick={() => navigate('/faq')}
      >
        FAQ
      </button>
      <button
        className="ml-16 font-productSans hover:text-mainRed transition-all duration-200 ease-in-out"
        onClick={() => navigate('/contact')}
      >
        Contact
      </button>
    </div>
  );
}

export default Header;
