import { useState } from "react";
import CustomInput from "../features/auth/ui/CustomInput";
import SendEmailModal from "../features/auth/ui/SendEmailModal";

function FindPasswordPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
          type="email"
          width="full"
          placeholder="아이디(이메일)"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      {/* 버튼 */}
      <div className="mt-16 mb-10 flex-center">
        <button
          className="w-80 p-4 rounded-full flex-center font-bold transition-all duration-150 ease-in-out bg-mainBlue text-mainWhite hover:bg-[#3D72CB]"
          onClick={() => setIsModalVisible(true)}
        >
          변경 링크 전송하기
        </button>
      </div>

      {/* 모달 */}
      {isModalVisible && <SendEmailModal email={email} onClose={() => setIsModalVisible(false)} />}
    </div>
  );
}

export default FindPasswordPage;