import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../features/auth/ui/CustomInput";
import CustomButton from "../features/auth/ui/CustomButton";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";
import { signupStep1Schema } from "../features/auth/model/authSchema";
import { postEmailSendAPI, postEmailVerificationAPI } from "../features/auth/api/authAPI";

interface SignupStep1FormData {
  email: string;
  verificationCode: string;
  password: string;
  passwordConfirm: string;
}

function SignupStep1Page() {
  // 상태 관리
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isEmailVerificationVisible, setIsEmailVerificationVisible] = useState(false);

  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignupStep1FormData>({
    mode: "onChange",
    resolver: yupResolver(signupStep1Schema),
    defaultValues: {
      email: "",
      verificationCode: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: SignupStep1FormData) => {
    console.log("회원가입 1단계 성공:", data);
  };

  // 이메일 인증 요청 함수
  const handleEmailSend = async () => {
    setIsSending(true);
    try {
      const email = watch("email");
      const message = await postEmailSendAPI({ email });
      alert(message.data);
      setIsEmailVerificationVisible(true);
    } catch (error) {
      console.error("이메일 인증 요청 실패:", error);
      alert("인증 코드 전송에 실패하였습니다.");
    } finally {
      setIsSending(false);
    }
  };

  // 이메일 검증 요청 함수
  const handleEmailVerification = async () => {
    setIsVerifying(true);
    try {
      const email = watch("email");
      const code = watch("verificationCode");
      const message = await postEmailVerificationAPI({ email, code });
      setIsEmailVerified(true);
      alert(message.data);
    } catch (error) {
      console.error("이메일 검증 요청 실패:", error);
      setIsEmailVerified(false);
      alert("이메일 인증에 실패하였습니다.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex-center flex-col">
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">회원가입</div>

      {/* 이메일 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          아이디 <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="flex items-center justify-between">
          <CustomInput
            {...register("email")}
            type="text"
            width="30rem"
            placeholder="아이디(이메일)"
            hasError={!!errors.email}
          />
          <CustomButton
            text="이메일 전송"
            disabled={!!errors.email || !watch("email") || isSending}
            onClick={handleEmailSend}
          />
        </div>
        {errors.email && <p className="text-[#FF2929] text-sm ml-2">{errors.email.message}</p>}

        {isEmailVerificationVisible && (
          <div className="mt-8 flex items-center justify-between">
            <CustomInput
              {...register("verificationCode")}
              type="text"
              width="30rem"
            placeholder="인증 번호"
            hasError={!!errors.verificationCode}
          />
          <CustomButton
            text="확인"
            disabled={!watch("verificationCode") || isVerifying}
            onClick={handleEmailVerification}
          />
        </div>
      )}
      {errors.verificationCode && (
        <p className="text-[#FF2929] text-sm ml-2">{errors.verificationCode.message}</p>
      )}
      </div>

      {/* 비밀번호 */}
      <div className="mt-24 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          비밀번호 <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          {...register("password")}
          type="password"
          width="full"
          placeholder="영문/숫자/특수문자 포함 8~20자"
          hasError={!!errors.password}
        />
        {errors.password && <p className="text-[#FF2929] text-sm ml-2">{errors.password.message}</p>}
      </div>

      {/* 비밀번호 확인 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          비밀번호 확인 <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          {...register("passwordConfirm")}
          type="password"
          width="full"
          placeholder="비밀번호 확인"
          hasError={!!errors.passwordConfirm}
        />
        {errors.passwordConfirm && (
          <p className="text-[#FF2929] text-sm ml-2">{errors.passwordConfirm.message}</p>
        )}
      </div>

      {/* 제출 */}
      <div className="mt-20 mb-32 flex-center">
        <CustomSubmitButton
          text="다음"
          isAvailable={isValid && isEmailVerified}
          onClick={() =>
            navigate("/signup/step2", {
              state: {
                email: watch("email"),
                password: watch("password"),
              },
            })
          }
        />
      </div>
    </form>
  );
}

export default SignupStep1Page;
