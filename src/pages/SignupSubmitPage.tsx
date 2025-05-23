import { useNavigate } from "react-router-dom";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";
import LogoImg from '../shared/assets/images/common/logo.png';

function SignupSubmitPage() {
  const navigate = useNavigate();
  
  return (
    <div className="w-screen h-view flex flex-col flex-center">
      <img
        className="mb-8 w-[10rem]"
        src={LogoImg}
      />
      <p className="mb-20 font-bold font-googleSansDisplay text-3xl">성공적으로 신청서가 제출되었습니다!</p>
      <CustomSubmitButton
        text="홈으로 이동하기"
        isAvailable={true}
        onClick={() => navigate("/")}
      />
    </div>
  )
}

export default SignupSubmitPage;
