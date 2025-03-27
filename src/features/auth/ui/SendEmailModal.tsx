import { useNavigate } from "react-router-dom";

interface SendEmailModalProps {
  email: string;
  onClose: () => void;
}

function SendEmailModal({ email, onClose }: SendEmailModalProps) {
  const navigate = useNavigate();

  // 바깥을 누르면 닫히도록
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  // 모달 내부 클릭 시 닫히지 않도록
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // 버튼 핸들러
  const handleModalclose = () => {
    navigate('/');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[black] bg-opacity-20"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-[30rem] h-[18rem] flex flex-col justify-between items-center rounded-3xl shadow-lg font-googleSansDisplay"
        onClick={handleModalClick}
      >
        <div className="w-full h-16 rounded-t-3xl flex-center bg-mainBlue text-lg font-bold text-[white]">
          비밀번호 설정 메일 발송
        </div>
        <div className="pl-6 w-80 h-12 bg-[#DDEAFF] flex items-center overflow-hidden">
          {email}
        </div>
        <div className="flex-center flex-col text-sm">
          <p>위 이메일로 비밀번호 설정 메일을 전송하였습니다.</p>
          <p>메일이 확인되지 않을 경우, 스팸함을 확인해 주세요.</p>
        </div>
        <button
          className="mb-4 w-60 h-10 rounded-full bg-mainBlue text-sm text-[white] font-bold transition-all duration-150 ease-in-out hover:bg-[#3D72CB]"
          onClick={() => handleModalclose()}
        >
          홈으로 이동하기
        </button>
      </div>
    </div>
  );
}

export default SendEmailModal;