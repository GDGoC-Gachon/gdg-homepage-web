import { useState } from "react";
import CustomInput from "../features/auth/ui/CustomInput";
import LoginButton from "../features/auth/ui/LoginButton";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  // 입력 필드 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // name 속성을 이용하여 동적으로 상태 업데이트
    });
  };

  return (
    <div className="p-4 flex-center flex-col">
      {/* 타이틀 */}
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">로그인</div>

      {/* 아이디 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">아이디</div>
        <CustomInput
          type="email"
          width="full"
          placeholder="아이디(이메일)"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* 비밀번호 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">비밀번호</div>
        <CustomInput
          type="password"
          width="full"
          placeholder="비밀번호"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* 로그인 버튼 */}
      <div className="mt-16 mb-10 flex-center">
        <LoginButton color="#F1F3F4" font_color="#4285F4">
          로그인
        </LoginButton>
      </div>

      <div className="mb-32 flex-center gap-10 font-googleSansDisplay text-sm">
        <p
          className="underline cursor-pointer"
          onClick={() => navigate('/join')}
        >
          가입 신청하기
        </p>
        <p
          className="underline cursor-pointer"
          onClick={() => navigate('/find-password')}
        >
          비밀번호 찾기
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
