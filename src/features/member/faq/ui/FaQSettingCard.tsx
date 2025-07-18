import { useState } from "react";
import FaQDeleteModal from "./FaQDeleteModal";
import { putFaqAPI } from "../api/faqAPI";

interface FaQSettingCardProps {
  id?: number;
  question: string;
  answer: string;
  onDelete: () => void;
}

function FaQSettingCard({ id, question, answer, onDelete }: FaQSettingCardProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isQuestion, setIsQuestion] = useState(question);
  const [isAnswer, setIsAnswer] = useState(answer);
  const [originalQuestion, setOriginalQuestion] = useState('');
  const [originalAnswer, setOriginalAnswer] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = () => {
    setOriginalQuestion(isQuestion);
    setOriginalAnswer(isAnswer);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsQuestion(originalQuestion);
    setIsAnswer(originalAnswer);
    setIsEdit(false);
  };

  // 수정 함수
  const handleSave = async () => {
    if (!id) return alert("FAQ ID가 없습니다.");
    try {
      const payload = {
        question: isQuestion,
        answer: isAnswer,
      };
      await putFaqAPI(id, payload);
      alert("FAQ가 수정되었습니다.");
      setIsEdit(false);
    } catch (error) {
      alert("FAQ 수정에 실패하였습니다.");
      console.error("FAQ 수정 에러:", error);
    }
  };

  return (
    <div className="px-10 pt-12 pb-6 mb-2 w-full rounded-xl flex-center flex-col gap-8 bg-[#FFF] shadow-lg">
      {/* 질문 */}
      <div className='w-full flex items-center gap-8'>
        <div className="text-xl font-bold text-[#64748B]">질문</div>
        {isEdit ? (
          <input
            type="text"
            value={isQuestion}
            onChange={(e) => setIsQuestion(e.target.value)}
            maxLength={100}
            className='p-2 w-[34.5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
          />
        ) : (
          <div className="flex items-center">{isQuestion}</div>
        )}
      </div>

      {/* 답변 */}
      <div className='w-full flex gap-8'>
        <div className="text-xl font-bold text-[#64748B]">답변</div>
        {isEdit ? (
          <input
            type="text"
            value={isAnswer}
            onChange={(e) => setIsAnswer(e.target.value)}
            maxLength={500}
            className='p-2 w-[34.5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
          />
        ) : (
          <div className="flex items-center">{isAnswer}</div>
        )}
      </div>

      {/* 버튼 */}
      <div className='w-full flex justify-end gap-5'>
        {isEdit ? (
          <>
            <button onClick={handleSave} className="w-36 h-10 bg-mainBlue text-white rounded-lg text-sm font-semibold hover:bg-[#3D72CB]">
              저장하기
            </button>
            <button onClick={handleCancel} className="w-36 h-10 border border-mainBlue text-mainBlue rounded-lg text-sm font-semibold hover:border-[#C6D9FF] hover:bg-[#C6D9FF] hover:text-white">
              취소하기
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="w-36 h-10 bg-mainBlue text-white rounded-lg text-sm font-semibold hover:bg-[#3D72CB]">
              수정하기
            </button>
            <button onClick={() => setIsModalVisible(true)} className="w-36 h-10 border border-mainBlue text-mainBlue rounded-lg text-sm font-semibold hover:border-[#C6D9FF] hover:bg-[#C6D9FF] hover:text-white">
              삭제하기
            </button>
          </>
        )}
      </div>

      {/* 삭제 모달 */}
      {isModalVisible && (
        <FaQDeleteModal
          onClose={() => setIsModalVisible(false)}
          onConfirm={() => {
            onDelete();
            setIsModalVisible(false);
          }}
        />
      )}
    </div>
  );
}

export default FaQSettingCard;