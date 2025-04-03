import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema, ChangePasswordFormData } from "../features/auth/model/authSchema";
import CustomInput from "../features/auth/ui/CustomInput";
import ErrorText from "../features/auth/ui/ErrorText";
import { useNavigate } from "react-router-dom";

function ChangePasswordPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(changePasswordSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ChangePasswordFormData) => {
    console.log("변경할 비밀번호:", data.password);
    alert("비밀번호가 변경되었습니다.");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex-center flex-col">
      <div className="mt-14 text-2xl font-bold font-googleSansDisplay">비밀번호 변경</div>
      <p className="my-3 text-sm text-[#828282] font-googleSansDisplay">변경할 비밀번호를 입력해 주세요.</p>

      {/* 비밀번호 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">비밀번호</div>
        <CustomInput
          {...register("password")}
          type="password"
          width="full"
          placeholder="영문/숫자/특수문자 포함 8~20자"
          hasError={!!errors.password}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      </div>

      {/* 비밀번호 확인 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">비밀번호 확인</div>
        <CustomInput
          {...register("passwordConfirm")}
          type="password"
          width="full"
          placeholder="비밀번호 확인"
          hasError={!!errors.passwordConfirm}
        />
        {errors.passwordConfirm && <ErrorText>{errors.passwordConfirm.message}</ErrorText>}
      </div>

      {/* 버튼 */}
      <div className="mt-16 mb-10 flex-center">
        <button
          type="submit"
          className={`w-80 p-4 rounded-full text-mainWhite font-bold transition-all duration-150 ease-in-out
                    ${isValid ? `bg-mainBlue hover:bg-[#3D72CB]` : `bg-[#D3D3D3] pointer-events-none`}`}
        >
          비밀번호 변경하기
        </button>
      </div>
    </form>
  );
}

export default ChangePasswordPage;
