import { useState, useEffect } from "react";
import CustomInput from "../features/auth/ui/CustomInput";
import { useNavigate } from "react-router-dom";

function ChangePasswordPage() {
  // state 관리
  const [isAvailable, setIsAvailable] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // name 속성을 이용하여 동적으로 상태 업데이트
    });
  };

  // 모든 필드가 입력되었는지 확인하여 버튼 활성화 여부 업데이트
  useEffect(() => {
    const { password, passwordConfirm } = formData;
    setIsAvailable(password.trim() !== "" && passwordConfirm.trim() !== "" && password === passwordConfirm);
  }, [formData]);

  // 비밀번호 변경 핸들러
  const handleChangePassword = () => {
    alert('비밀번호가 변경되었습니다.')
    navigate('/');
  };

  return (
    <div className="p-4 flex-center flex-col">
      {/* 타이틀 */}
      <div className="mt-14 text-2xl font-bold font-googleSansDisplay">비밀번호 변경</div>
      <p className="my-3 text-sm text-[#828282] font-googleSansDisplay">변경할 비밀번호를 입력해 주세요.</p>

      {/* 비밀번호 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">비밀번호</div>
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
        <div className="font-bold font-googleSansDisplay">비밀번호 확인</div>
        <CustomInput
          type="password"
          width="full"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
      </div>

      {/* 로그인 버튼 */}
      {/* 버튼 */}
      <div className="mt-16 mb-10 flex-center">
      <button
        className={`w-80 p-4 rounded-full text-mainWhite font-bold transition-all duration-150 ease-in-out
                    ${isAvailable ? `bg-mainBlue hover:bg-[#3D72CB]` : `bg-[#D3D3D3] pointer-events-none`}`}
        onClick={() => handleChangePassword}
      >
        비밀번호 변경하기
      </button>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
