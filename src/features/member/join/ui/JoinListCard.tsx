import { useState, useEffect } from "react";
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/member/join/editIcon.svg';
import { ReactComponent as FinishIcon } from '../../../../shared/assets/icons/member/join/finishIcon.svg';
import JoinFinishModal from "./JoinFinishModal";
import JoinEditModal from "./JoinEditModal";

interface JoinListCardProps {
  title: string;
  startDate: string;
  endDate: string;
  member: number;
  isFinished: boolean;
  onFinish: () => void;
  onEdit: (updated: {
    title: string;
    startDate: string;
    endDate: string;
    member: number;
  }) => void;
}

function JoinListCard({ title, startDate, endDate, member, isFinished, onFinish, onEdit }: JoinListCardProps) {
  const [isTitle, ] = useState(title);
  const [isStartDate, ] = useState(startDate);
  const [isEndDate, setIsEndDate] = useState(endDate);
  const [isMember, ] = useState(member);
  const [isFinishModalVisible, setIsFinishModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const formatDate = (date: string) => date.replace(/-/g, '.');

  useEffect(() => {
    setIsEndDate(endDate);
  }, [endDate]);

  return (
    <div className={`p-8 w-full flex justify-between text-[#64748B] ${isFinished ? 'bg-[#E7EAEE]' : ''}`}>
      <div className="flex gap-10">
        <div className="w-[15rem] overflow-hidden">{isTitle}</div>
        <div className="w-[15rem]">{formatDate(isStartDate)} ~ {formatDate(isEndDate)}</div>
        <div className="w-[5rem]">n</div>
        <div className="w-[5rem]">n</div>
      </div>

      {!isFinished && (
        <div className="flex gap-10">
          <div
            onClick={() => setIsEditModalVisible(true)}
            className="flex-center gap-1 font-bold cursor-pointer"
          >
            <EditIcon />
            수정
          </div>
          <div
            onClick={() => setIsFinishModalVisible(true)}
            className="flex-center gap-1 font-bold cursor-pointer"
          >
            <FinishIcon />
            마감
          </div>
        </div>
      )}

      {isFinishModalVisible && (
        <JoinFinishModal
          onClose={() => setIsFinishModalVisible(false)}
          onConfirm={() => {
            onFinish();
            setIsFinishModalVisible(false);
          }}
        />
      )}

      {isEditModalVisible && (
        <JoinEditModal
          title={isTitle}
          startDate={isStartDate}
          endDate={isEndDate}
          member={isMember}
          onClose={() => setIsEditModalVisible(false)}
          onConfirm={(updated) => {
            onEdit(updated);
            setIsEditModalVisible(false);
          }}
        />
      )}
    </div>
  );
}

export default JoinListCard;
