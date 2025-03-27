import { useState, useEffect } from "react";
import CustomInput from "../features/auth/ui/CustomInput";
import CustomSubmitButton from "../features/auth/ui/CustomSubmitButton";
import CustomCheckBox from "../features/auth/ui/CustomCheckBox";
import CustomRadioBox from "../features/auth/ui/CustomRadioBox";
import StackTag from "../features/auth/ui/StackTag";

function SignupStep2Page() {
  // 기술 스택 리스트
  const techStacks = [
    "React", "Vue.js", "Angular", "Next.js", "Svelte",
    "Node.js", "Express.js", "NestJS", "Spring Boot", "Django",
    "Flask", "FastAPI", "Ruby on Rails", "Swift", "Kotlin",
    "Flutter", "React Native", "TensorFlow", "PyTorch", "Kubernetes",
    "Docker", "AWS", "Azure", "Google Cloud", "Firebase",
    "GraphQL", "MongoDB", "MySQL", "PostgreSQL", "Redis",
    "Elasticsearch"
  ];

  // state 관리
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedRole, setSelectedRole] = useState("member");
  const [checkedCareer, setCheckedCareer] = useState<{ [key: string]: boolean }>({
    'Front-end': false,
    'Back-end': false,
    'Mobile': false,
    'AI/ML': false,
    'DevOps/Cloud': false,
  });
  const [checkedStack, setCheckedStack] = useState<{ [key: string]: boolean }>(
    techStacks.reduce((acc, stack) => ({ ...acc, [stack]: false }), {})
  );


  // 입력 필드 상태 관리
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    grade: "",
    number: "",
    major: "",
    info: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 모든 필드가 입력되었는지 확인하여 버튼 활성화 여부 업데이트
  useEffect(() => {
    const { name, phoneNumber, grade, number, major } = formData;
  
    const hasCareer = Object.values(checkedCareer).some(Boolean);
    const hasStack = Object.values(checkedStack).some(Boolean);
  
    setIsAvailable(
      name.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      grade.trim() !== "" &&
      number.trim() !== "" &&
      major.trim() !== "" &&
      hasCareer &&
      hasStack
    );
  }, [formData, checkedCareer, checkedStack]);

  // 역할 선택 핸들러
  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
  };

  // 분야 선택 핸들러
  const handleSelectCarrer = (key: string) => {
    setCheckedCareer((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // 스택 선택 핸들러
  const handleSelectStack = (stack: string) => {
    setCheckedStack((prev) => {
      const newCheckedState = { ...prev, [stack]: !prev[stack] };
      // 선택된 개수가 5개 초과되면 선택 취소
      if (Object.values(newCheckedState).filter(Boolean).length > 5) {
        return prev;
      }
      return newCheckedState;
    });
  };


  return (
    <div className="p-4 flex-center flex-col">
      {/* 타이틀 */}
      <div className="m-14 text-2xl font-bold font-googleSansDisplay">가입 신청서</div>

      {/* 역할 선택 */}
      <div className="mt-8 w-[42rem] flex flex-col gap-3">
        <div className="font-bold font-googleSansDisplay">
          신청
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="flex items-center gap-5">
          <CustomRadioBox 
            isChecked={selectedRole === "member"} 
            onChange={() => handleSelectRole("member")} 
            label="Member" 
          />
          <CustomRadioBox 
            isChecked={selectedRole === "team-member"} 
            onChange={() => handleSelectRole("team-member")} 
            label="Team member(운영진)" 
          />
        </div>
      </div>

      {/* 이름 입력 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          이름
          <span className="ml-2 text-mainBlue">*</span>
        </div>
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
        <div className="font-bold font-googleSansDisplay">
          휴대폰 번호
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          type="tel"
          width="full"
          placeholder="휴대폰 번호"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      {/* 학년 입력 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          학년
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          type="text"
          width="full"
          placeholder="졸업생인 경우 ‘졸업생'으로 입력해 주세요"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        />
      </div>

      {/* 학번 입력 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          학번
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          type="text"
          width="full"
          placeholder="학번"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>

      {/* 전공 입력 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          전공
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <CustomInput
          type="text"
          width="full"
          placeholder="전공"
          name="major"
          value={formData.major}
          onChange={handleChange}
        />
      </div>

      {/* 분야 선택 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-3">
        <div className="font-bold font-googleSansDisplay">
          관심 기술 분야
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="flex items-center gap-5">
          {Object.entries(checkedCareer).map(([key, isChecked]) => (
              <CustomCheckBox isChecked={isChecked} onChange={() => handleSelectCarrer(key)} label={key} />
          ))}
        </div>
      </div>

      {/* 기술 선택 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">
          보유/관심 기술 스택 &#40;최대 5개 선택 가능&#41;
          <span className="ml-2 text-mainBlue">*</span>
        </div>
        <div className="w-full flex flex-wrap items-center gap-4">
          {Object.entries(checkedStack).map(([key, isChecked]) => (
              <StackTag isChecked={isChecked} onChange={() => handleSelectStack(key)} label={key} />
          ))}
        </div>
      </div>

      {/* 정보 입력 */}
      <div className="mt-14 w-[42rem] flex flex-col gap-2">
        <div className="font-bold font-googleSansDisplay">기타</div>
        <CustomInput
          type="text"
          width="full"
          placeholder="추가적으로 보유/관심 기술 스택이 있다면 적어주세요"
          name="info"
          value={formData.info}
          onChange={handleChange}
        />
      </div>

      {/* 개인정보 동의 */}
      <div className="mt-14 w-[42rem] flex flex-col font-googleSansDisplay gap-2">
        <div className="font-bold font-googleSansDisplay">개인 정보 동의</div>
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
          navigateURL="/signup/submit"
        />
      </div>
    </div>
  );
}

export default SignupStep2Page;
