import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginFormData } from "../features/auth/model/authSchema";
import CustomInput from "../features/auth/ui/CustomInput";
import LoginButton from "../features/auth/ui/LoginButton";
import ErrorText from "../features/auth/ui/ErrorText";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("로그인 시도:", data);
    // alert("로그인에 성공하였습니다");
    // navigate("/signup/pending"); // 승인 전
    navigate("/member/home"); // 멤버
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex-center flex-col">
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">로그인</div>

      {/* 아이디 입력 */}
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

      {/* 비밀번호 입력 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">비밀번호</div>
        <CustomInput
          {...register("password")}
          type="password"
          width="full"
          placeholder="비밀번호"
          hasError={!!errors.password}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      </div>

      {/* 로그인 버튼 */}
      <div className="mt-16 mb-10 flex-center">
        <LoginButton
          color="#F1F3F4"
          font_color="#4285F4"
          type="submit"
        >
          로그인
        </LoginButton>
      </div>

      <div className="mb-32 flex-center gap-10 font-googleSansDisplay text-sm">
        <p
          className="underline cursor-pointer"
          onClick={() => navigate("/join")}
        >
          가입 신청하기
        </p>
        <p
          className="underline cursor-pointer"
          onClick={() => navigate("/find-password")}
        >
          비밀번호 찾기
        </p>
      </div>
    </form>
  );
}

export default LoginPage;
