import { useState } from "react";

interface JoinEditModalProps {
  title: string;
  startDate: string;
  endDate: string;
  member: number;
  onClose: () => void;
  onConfirm: (updated: {
    title: string;
    startDate: string;
    endDate: string;
    member: number;
  }) => void;
}

function JoinEditModal({ title, startDate, endDate, member, onClose, onConfirm }: JoinEditModalProps) {
  const [titleInput, setTitleInput] = useState(title);
  const [startDateInput, setStartDateInput] = useState(startDate);
  const [endDateInput, setEndDateInput] = useState(endDate);
  const [memberInput, setMemberInput] = useState(member.toString());

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[black] bg-opacity-20"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-[50rem] flex flex-col justify-between items-center rounded-xl shadow-lg font-googleSansDisplay"
        onClick={handleModalClick}
      >
        <div className="w-full h-12 rounded-t-xl flex-center bg-mainBlue font-bold text-[white]">
          정보 수정하기
        </div>

        <div className="p-8 w-full rounded-xl flex-center flex-col gap-6">
          <div className='w-full flex items-center gap-1'>
            <div className="w-32 flex-center font-bold text-[#64748B]">제목</div>
            <input
              type="text"
              maxLength={100}
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              className='p-2 w-[34.5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
            />
          </div>

          <div className='w-full flex items-center gap-1'>
            <div className="w-32 flex-center font-bold text-[#64748B]">가입 시작일</div>
            <input
              type="date"
              value={startDateInput}
              onChange={(e) => setStartDateInput(e.target.value)}
              className='p-2 w-[13rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
            />
            <div className="w-32 flex-center font-bold text-[#64748B]">가입 종료일</div>
            <input
              type="date"
              value={endDateInput}
              onChange={(e) => setEndDateInput(e.target.value)}
              className='p-2 w-[13rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
            />
          </div>

          <div className='w-full flex justify-between items-center'>
            <div className='w-full flex items-center gap-1'>
              <div className="w-32 flex-center font-bold text-[#64748B]">최대 모집 인원</div>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={memberInput}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setMemberInput(value);
                  }
                }}
                className='p-2 w-[5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex-center gap-5">
          <button
            className="mb-4 w-28 h-8 rounded-lg bg-mainBlue text-white text-sm font-semibold hover:bg-[#3D72CB]"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="mb-4 w-28 h-8 border border-mainBlue text-mainBlue rounded-lg text-sm font-semibold hover:border-[#C6D9FF] hover:bg-[#C6D9FF] hover:text-white"
            onClick={() => onConfirm({
              title: titleInput,
              startDate: startDateInput,
              endDate: endDateInput,
              member: Number(memberInput),
            })}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinEditModal;
