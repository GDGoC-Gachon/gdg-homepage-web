import * as yup from "yup";

export const signupStep1Schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  verificationCode: yup.string().required("인증 번호를 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,20}$/,
      "영문/숫자/특수문자 포함 8~20자로 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인이 필요합니다."),
});
