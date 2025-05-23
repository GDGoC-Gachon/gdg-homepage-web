import * as yup from "yup";

// 회원가입 1페이지 스키마
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

// 회원가입 2페이지 스키마
export const signupStep2Schema = yup.object({
  name: yup
    .string()
    .matches(/^[가-힣a-zA-Z]{2,}$/, "이름 형식이 올바르지 않습니다.")
    .required("이름을 입력해주세요."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .min(13, "휴대폰 번호 형식이 올바르지 않습니다."),
  number: yup
    .string()
    .required("학번을 입력해주세요.")
    .matches(/^\d{9}$/, "학번 형식이 올바르지 않습니다."),
  major: yup
    .string()
    .required("전공을 입력해주세요."),
  info: yup.string().optional().default(""),
});
// 회원가입 2페이지 폼 데이터 타입
export type SignupStep2FormData = yup.InferType<typeof signupStep2Schema>;

// 로그인 스키마
export const loginSchema = yup.object({
  email: yup
  .string()
  .email("이메일 형식이 올바르지 않습니다.")
  .required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});
// 로그인 폼 데이터 타입
export type LoginFormData = yup.InferType<typeof loginSchema>;

// 비밀번호 찾기 스키마
export const findPasswordSchema = yup.object({
  email: yup
  .string()
  .email("이메일 형식이 올바르지 않습니다.")
  .required("아이디를 입력해주세요."),
});
// 비밀번호 찾기 폼 데이터 타입
export type FindPasswordFormData = yup.InferType<typeof findPasswordSchema>;

// 비밀번호 변경 스키마
export const changePasswordSchema = yup.object({
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,20}$/,
      "영문/숫자/특수문자 포함 8~20자로 입력해주세요."
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인이 필요합니다."),
});
// 비밀번호 변경 폼 데이터 타입
export type ChangePasswordFormData = yup.InferType<typeof changePasswordSchema>;
