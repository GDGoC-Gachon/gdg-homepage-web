import { useState, useEffect } from "react";
import { ReactComponent as EditIcon } from '../../../../shared/assets/icons/member/join/editIcon.svg';
import { ReactComponent as FinishIcon } from '../../../../shared/assets/icons/member/join/finishIcon.svg';
import JoinFinishModal from "./JoinFinishModal";
import JoinEditModal from "./JoinEditModal";
import { putJoinPeriodAPI } from "../api/joinAPI";

interface JoinListCardProps {
  id?: number;
  title: string;
  startDate: string;
  endDate: string;
  member: number;
  isFinished?: boolean;
  onFinish: () => void;
  onEdit: (updated: {
    title: string;
    startDate: string;
    endDate: string;
    member: number;
  }) => void;
}

function JoinListCard({ id, title, startDate, endDate, member, isFinished, onFinish, onEdit }: JoinListCardProps) {
  const [isTitle, setIsTitle] = useState(title);
  const [isStartDate, setIsStartDate] = useState(startDate);
  const [isEndDate, setIsEndDate] = useState(endDate);
  const [isMember, setIsMember] = useState(member);
  const [isFinishModalVisible, setIsFinishModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const formatDate = (date: string) => date.replace(/-/g, '.');

  useEffect(() => {
    setIsTitle(title);
  }, [title]);
  
  useEffect(() => {
    setIsStartDate(startDate);
  }, [startDate]);
  
  useEffect(() => {
    setIsEndDate(endDate);
  }, [endDate]);
  
  useEffect(() => {
    setIsMember(member);
  }, [member]);

  return (
    <div className={`p-8 w-full flex justify-between text-[#64748B] ${isFinished ? '' : 'bg-[#E7EAEE]'}`}>
      <div className="flex gap-10">
        <div className="w-[15rem] overflow-hidden">{isTitle}</div>
        <div className="w-[15rem]">{formatDate(isStartDate)} ~ {formatDate(isEndDate)}</div>
        <div className="w-[5rem]">0</div>
        <div className="w-[5rem]">0</div>
      </div>

      {isFinished && (
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
            const toISOStringWithMidnight = (date: string) =>
              new Date(date + 'T00:00:00').toISOString();

            const updatedData = {
              title: updated.title,
              startDate: toISOStringWithMidnight(updated.startDate),
              endDate: toISOStringWithMidnight(updated.endDate),
              maxMember: updated.member,
            };

            // 가입 일정 수정 api 호출
            if (typeof id === 'number') {
              putJoinPeriodAPI(id, updatedData)
                .then(() => {
                  onEdit(updated);
                  setIsEditModalVisible(false);
                  alert('가입 일정이 수정되었습니다.');
                })
                .catch((err) => {
                  console.error(err);
                  alert('가입 일정 수정에 실패했습니다.');
                });
            } else {
              alert('가입 일정 ID가 없습니다. 수정할 수 없습니다.');
            }
          }}
        />
      )}
    </div>
  );
}

export default JoinListCard;
