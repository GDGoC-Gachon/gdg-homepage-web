import { useState, useEffect } from "react";
import CustomInput from "../features/auth/ui/CustomInput";
import CustomButton from "../features/auth/ui/CustomButton";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";

function SignupStep1Page() {
  // state 관리
  const [isAvailable, setIsAvailable] = useState(false);

  // 입력 필드 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
    password: "",
    passwordConfirm: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // name 속성을 이용하여 동적으로 상태 업데이트
    });
  };

  // 모든 필드가 입력되었는지 확인하여 버튼 활성화 여부 업데이트
  useEffect(() => {
    const { email, verificationCode, password, passwordConfirm } = formData;
    setIsAvailable(email.trim() !== "" && verificationCode.trim() !== "" && password.trim() !== "" && passwordConfirm.trim() !== "");
  }, [formData]);

  return (
    <div className="p-4 flex-center flex-col">
      {/* 타이틀 */}
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">회원가입</div>

      {/* 아이디 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          아이디
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="flex items-center justify-between">
          <CustomInput
            type="email"
            width="30rem"
            placeholder="아이디(이메일)"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <CustomButton text="이메일 전송"/>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <CustomInput
            type="tel"
            width="30rem"
            placeholder="인증 번호"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
          />
          <CustomButton text="확인"/>
        </div>
      </div>

      {/* 비밀번호 입력 */}
      <div className="mt-24 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          비밀번호
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          type="password"
          width="full"
          placeholder="영문/숫자/특수문자 포함 8~20자"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* 비밀번호 확인 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          비밀번호 확인
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          type="password"
          width="full"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
      </div>

      {/* 제출 버튼 */}
      <div className="mt-20 mb-32 flex-center">
        <CustomSubmitButton
          text="다음"
          isAvailable={isAvailable}
          navigateURL="/signup/step2"
        />
      </div>
    </div>
  );
}

export default SignupStep1Page;
