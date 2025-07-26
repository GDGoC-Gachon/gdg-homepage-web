import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { findPasswordSchema, FindPasswordFormData } from "../features/auth/model/authSchema";
import CustomInput from "../features/auth/ui/CustomInput";
import SendEmailModal from "../features/auth/ui/SendEmailModal";
import ErrorText from "../features/auth/ui/ErrorText";
import { postRequestPasswordAPI } from "../features/auth/api/authAPI";

function FindPasswordPage() {
  // 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FindPasswordFormData>({
    resolver: yupResolver(findPasswordSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  // 비밀번호 찾기
  const onSubmit = (data: FindPasswordFormData) => {
    setEmail(data.email);
    setIsModalVisible(true);
    handleRequestPassword();
  };

  // 비밀번호 재설정 API 요청
  const handleRequestPassword = async () => {
    try {
      await postRequestPasswordAPI();
    } catch {
      console.log('비밀번호 재설정 요청 실패');
    }
  };

  return (
    <div className="p-4 flex-center flex-col relative">
      {/* 타이틀 */}
      <div className="mt-14 text-2xl font-bold font-googleSansDisplay">비밀번호 찾기</div>
      <p className="mt-3 text-sm text-[#828282] font-googleSansDisplay">가입한 이메일을 입력해 주세요.</p>
      <p className="mb-1 text-sm text-[#828282] font-googleSansDisplay">이메일을 통해 비밀번호 변경 링크가 발송됩니다.</p>

      {/* 입력 필드 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">아이디</div>
        <CustomInput
          {...register("email")}
          width="full"
          placeholder="아이디(이메일)"
          hasError={!!errors.email}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </div>

      {/* 버튼 */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-16 mb-10 flex-center">
        <button
          type="submit"
          className="w-80 p-4 rounded-full flex-center font-bold transition-all duration-150 ease-in-out bg-mainBlue text-mainWhite hover:bg-[#3D72CB]"
        >
          변경 링크 전송하기
        </button>
      </form>

      {/* 모달 */}
      {isModalVisible && <SendEmailModal email={email} onClose={() => setIsModalVisible(false)} />}
    </div>
  );
}

export default FindPasswordPage;