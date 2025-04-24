interface JoinRejectModalProps {
  onClose: () => void;
}

function JoinRejectModal({ onClose }: JoinRejectModalProps) {
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
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[black] bg-opacity-20"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-[20rem] h-[12rem] flex flex-col justify-between items-center rounded-xl shadow-lg font-googleSansDisplay"
        onClick={handleModalClick}
      >
        <div className="w-full h-12 rounded-t-xl flex-center bg-mainBlue text-sm font-bold text-[white]">
          신청 거절하기
        </div>
        <div className="flex-center flex-col text-center text-sm">
          <p>신청 거절하시겠습니까?<br/>
          거절하면 되돌릴 수 없습니다.</p>
        </div>
        <div className="mb-4 flex-center gap-5">
          <button
            className="mb-4 w-28 h-8 rounded-lg bg-mainBlue text-sm text-[white] font-semibold transition-all duration-150 ease-in-out hover:bg-[#3D72CB]"
            onClick={() => onClose()}
          >
            취소
          </button>
          <button
            className="mb-4 w-28 h-8 border border-[1.5px] border-mainBlue rounded-lg text-sm text-mainBlue font-semibold transition-all duration-150 ease-in-out
                      hover:border-[#C6D9FF] hover:text-[#FFF] hover:bg-[#C6D9FF]"
            onClick={() => handleModalclose()}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinRejectModal;
