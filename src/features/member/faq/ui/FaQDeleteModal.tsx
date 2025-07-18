interface FaqDeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

function FaqDeleteModal({ onClose, onConfirm }: FaqDeleteModalProps) {
  // 바깥을 누르면 닫히도록
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  // 모달 내부 클릭 시 닫히지 않도록
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
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
          FAQ 삭제하기
        </div>
        <div className="flex-center flex-col text-sm">
          <p>해당 FAQ를 삭제하시겠습니까?</p>
          <p>삭제된 항목은 복구가 불가능합니다.</p>
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
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaqDeleteModal;
