import { useNavigate } from "react-router-dom";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";
import LogoImg from '../shared/assets/images/common/logo.png';

function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <div className="w-screen h-view flex flex-col flex-center">
      <img
        className="mb-8 w-[10rem]"
        src={LogoImg}
      />
      <p className="mb-3 font-bold font-googleSansDisplay text-3xl">404 Page Not Found</p>
      <p className="mb-10 font-googleSansDisplay text-[#828282]">해당 페이지를 찾을 수 없습니다.</p>
      <CustomSubmitButton
        text="홈으로 이동하기"
        isAvailable={true}
        onClick={() => navigate("/")}
      />
    </div>
  )
}

export default NotFoundPage;
