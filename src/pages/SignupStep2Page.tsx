import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import CustomInput from "../features/auth/ui/CustomInput";
import CustomButton from "../features/auth/ui/CustomButton";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";

function SignupStep2Page() {
  // state 관리
  const [isAvailable, setIsAvailable] = useState(false);

  // 입력 필드 상태 관리
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    verificationCode: "",
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
    const { name, phoneNumber, verificationCode } = formData;
    setIsAvailable(name.trim() !== "" && phoneNumber.trim() !== "" && verificationCode.trim() !== "");
  }, [formData]);


  return (
    <div className="p-16 flex-center flex-col">
      {/* 프로그래스 바 */}
      <div className="flex-center gap-8">
        <div className="w-[13rem] h-[1.5rem] bg-gradient-to-r from-[#E3EAF4] to-mainBlue rounded-full"></div>
        <div className="w-[13rem] h-[1.5rem] bg-[#E3EAF4] rounded-full overflow-hidden">
          <Fade triggerOnce direction="left" className="w-full h-full rounded-full">
            <div className="w-full h-full bg-gradient-to-r from-[#E3EAF4] to-mainBlue rounded-full"></div>
          </Fade>
        </div>
        <div className="w-[13rem] h-[1.5rem] bg-[#E3EAF4] rounded-full"></div>
      </div>

      {/* 타이틀 */}
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">회원가입</div>

      {/* 이름 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">이름</div>
        <CustomInput
          type="text"
          width="full"
          placeholder="이름"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* 번호 입력 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">휴대폰 번호</div>
        <div className="flex items-center justify-between">
          <CustomInput
            type="tel"
            width="30rem"
            placeholder="휴대폰 번호"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <CustomButton text="인증번호 전송"/>
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

      {/* 제출 버튼 */}
      <div className="mt-20 mb-32 flex-center">
        <CustomSubmitButton
          text="다음"
          isAvailable={isAvailable}
          navigateURL="/signup/step3"
        />
      </div>
    </div>
  );
}

export default SignupStep2Page;
