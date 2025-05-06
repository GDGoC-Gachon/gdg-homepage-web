import { useNavigate } from "react-router-dom";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";
import LogoImg from '../shared/assets/images/common/logo.png';

function SignupPending() {
  const navigate = useNavigate();
  
  return (
    <div className="w-screen h-view flex flex-col flex-center">
      <img
        className="mb-8 w-[10rem]"
        src={LogoImg}
      />
      <p className="mb-3 font-bold font-googleSansDisplay text-3xl">가입 승인 요청 중입니다!</p>
      <p className="mb-20 font-googleSansDisplay text-[#828282]">승인 완료 후 메일로 안내 드리겠습니다.</p>
      <CustomSubmitButton
        text="홈으로 이동하기"
        isAvailable={true}
        onClick={() => navigate("/")}
      />
    </div>
  )
}

export default SignupPending;
