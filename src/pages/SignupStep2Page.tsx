import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupStep2Schema, SignupStep2FormData } from "../features/auth/model/authSchema";
import CustomInput from "../features/auth/ui/CustomInput";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";
import CustomCheckBox from "../features/auth/ui/CustomCheckBox";
import CustomRadioBox from "../features/auth/ui/CustomRadioBox";
import StackTag from "../features/auth/ui/StackTag";
import { useEffect, useState } from "react";
import LabelWithAsterisk from "../features/auth/ui/LabelWithAsterisk";
import ErrorText from "../features/auth/ui/ErrorText";
import { postSignupAPI, PostSignupAPIRequest } from "../features/auth/api/authAPI";
import { techCareer, techStacks } from "../features/auth/model/techOptionsData";

function SignupStep2Page() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<SignupStep2FormData>({
    mode: "onChange",
    resolver: yupResolver(signupStep2Schema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      number: "",
      major: "",
      info: "",
    },
  });

  const [selectedRole, setSelectedRole] = useState("member");
  const [selectedGrade, setSelectedGrade] = useState(1);
  const [checkedCareer, setCheckedCareer] = useState<{ [key: string]: boolean }>(
    techCareer.reduce((acc, cur) => ({ ...acc, [cur.label]: false }), {})
  );
  const [checkedStack, setCheckedStack] = useState<{ [key: string]: boolean }>(
    techStacks.reduce((acc, cur) => ({ ...acc, [cur.label]: false }), {})
  );
  const [isAvailable, setIsAvailable] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { email, password } = location.state || {};

  // 핸드폰 번호 자동 하이픈
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // 숫자만 허용
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 3 && value.length <= 7)
      value = value.replace(/(\d{3})(\d+)/, "$1-$2");
    else if (value.length > 7)
      value = value.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");
  
    setValue("phoneNumber", value);
    trigger("phoneNumber");
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // 숫자만 허용
    if (value.length > 9) value = value.slice(0, 9);
    setValue("number", value);
    trigger("number");
  };

  // 회원가입 요청 함수
  const onSubmit = async (data: SignupStep2FormData) => {
    const selectedCareers = techCareer
      .filter(({ label }) => checkedCareer[label])
      .map(({ value }) => value);

    const selectedStacks = techStacks
      .filter(({ label }) => checkedStack[label])
      .map(({ value }) => value);

    const requestBody: PostSignupAPIRequest = {
      member: {
        email,
        password,
        name: data.name,
        phoneNumber: data.phoneNumber,
      },
      apply: {
        role: (selectedRole === "team-member" ? "TEAM_MEMBER" : "MEMBER") as "TEAM_MEMBER" | "MEMBER",
        grade: selectedGrade,
        studentId: data.number,
        major: data.major,
        techField: selectedCareers,
        techStack: selectedStacks,
        other: data.info,
      },
    };
  
    try {
      const response = await postSignupAPI(requestBody);
      alert(response.data);
      navigate("/signup/submit");
    } catch (error) {
      alert("회원가입 요청 중 오류가 발생했습니다.");
      console.error("회원가입 실패:", error);
    } finally {
      console.log("회원가입 정보: ", requestBody);
    }
  };

  // 필드 + 체크 항목 모두 입력돼야 제출 버튼 활성화
  useEffect(() => {
    const hasCareer = Object.values(checkedCareer).some(Boolean);
    const hasStack = Object.values(checkedStack).some(Boolean);
    setIsAvailable(isValid && hasCareer && hasStack);
  }, [isValid, checkedCareer, checkedStack]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex-center flex-col">
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">가입 신청서</div>

      {/* 역할 선택 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-3">
        <div className="font-bold font-googleSansDisplay">
          신청 <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="flex items-center gap-5">
          <CustomRadioBox
            isChecked={selectedRole === "member"}
            onChange={() => setSelectedRole("member")}
            label="Member"
          />
          <CustomRadioBox
            isChecked={selectedRole === "team-member"}
            onChange={() => setSelectedRole("team-member")}
            label="Team member(운영진)"
          />
        </div>
      </div>

      {/* 이름 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <LabelWithAsterisk>이름</LabelWithAsterisk>
        <CustomInput
          {...register("name")}
          placeholder="이름"
          width="full"
          hasError={!!errors.name}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </div>

      {/* 휴대폰 번호 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <LabelWithAsterisk>휴대폰 번호</LabelWithAsterisk>
        <CustomInput
          {...register("phoneNumber")}
          placeholder="휴대폰 번호"
          width="full"
          onChange={handlePhoneNumberChange}
          hasError={!!errors.phoneNumber}
        />
        {errors.phoneNumber && <ErrorText>{errors.phoneNumber.message}</ErrorText>}
      </div>

      {/* 학년 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-3">
        <div className="font-bold font-googleSansDisplay">
          학년 <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="flex items-center gap-5">
          <CustomRadioBox
            isChecked={selectedGrade === 1}
            onChange={() => setSelectedGrade(1)}
            label="1학년"
          />
          <CustomRadioBox
            isChecked={selectedGrade === 2}
            onChange={() => setSelectedGrade(2)}
            label="2학년"
          />
          <CustomRadioBox
            isChecked={selectedGrade === 3}
            onChange={() => setSelectedGrade(3)}
            label="3학년"
          />
          <CustomRadioBox
            isChecked={selectedGrade === 4}
            onChange={() => setSelectedGrade(4)}
            label="4학년"
          />
          <CustomRadioBox
            isChecked={selectedGrade === 5}
            onChange={() => setSelectedGrade(5)}
            label="5학년"
          />
          <CustomRadioBox
            isChecked={selectedGrade === 6}
            onChange={() => setSelectedGrade(6)}
            label="졸업생"
          />
        </div>
      </div>

      {/* 학번 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <LabelWithAsterisk>학번</LabelWithAsterisk>
        <CustomInput
          {...register("number")}
          placeholder="학번"
          width="full"
          maxLength={9}
          onChange={handleNumberChange}
          hasError={!!errors.number}
        />
        {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
      </div>

      {/* 전공 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <LabelWithAsterisk>전공</LabelWithAsterisk>
        <CustomInput
          {...register("major")}
          placeholder="전공"
          width="full"
          maxLength={30}
          hasError={!!errors.major}
        />
        {errors.major && <ErrorText>{errors.major.message}</ErrorText>}
      </div>

      {/* 관심 기술 분야 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-3">
        <LabelWithAsterisk>관심 기술 분야</LabelWithAsterisk>
        <div className="flex flex-wrap gap-5">
          {Object.entries(checkedCareer).map(([key, val]) => (
            <CustomCheckBox
              key={key}
              isChecked={val}
              onChange={() =>
                setCheckedCareer((prev) => ({ ...prev, [key]: !prev[key] }))
              }
              label={key}
            />
          ))}
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <LabelWithAsterisk>보유/관심 기술 스택 (최대 5개 선택 가능)</LabelWithAsterisk>
        <div className="w-full flex flex-wrap items-center gap-4">
          {Object.entries(checkedStack).map(([key, isChecked]) => (
            <StackTag
              key={key}
              isChecked={isChecked}
              onChange={() =>
                setCheckedStack((prev) => {
                  const updated = { ...prev, [key]: !prev[key] };
                  return Object.values(updated).filter(Boolean).length > 5
                    ? prev
                    : updated;
                })
              }
              label={key}
            />
          ))}
        </div>
      </div>

      {/* 기타 정보 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">기타</div>
        <CustomInput
          {...register("info")}
          placeholder="추가적으로 보유/관심 기술 스택이 있다면 적어주세요"
          width="full"
        />
      </div>

      {/* 개인정보 동의 */}
      <div className="mt-14 w-[42rem] flex flex-col font-googleSansDisplay gap-2">
        <div className="font-bold">개인 정보 동의</div>
        <p className="text-sm">1. 개인정보의 수집 및 이용 목적</p>
        <p className="text-sm">신청자 식별, 본인 확인, 승인 여부 확인 및 문의 등의 원활한 처리</p>
        <p className="mt-4 text-sm">2. 수집하는 개인 정보의 항목</p>
        <p className="text-sm">이름, 학번, 학년, 전공, 이메일, 관심 기술 분야, 보유/관심 기술 스택</p>
      </div>

      {/* 제출 버튼 */}
      <div className="mt-20 mb-32 flex-center">
        <CustomSubmitButton
          text="제출"
          isAvailable={isAvailable}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
}

export default SignupStep2Page;
