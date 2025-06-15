import { useState, useEffect } from 'react';
import { ReactComponent as JoinIcon } from '../shared/assets/icons/member/common/memberJoinIcon.svg';
import JoinListCard from '../features/member/join/ui/JoinListCard';
import { postJoinPeriodAPI, getJoinPeriodAPI } from '../features/member/join/api/joinAPI';

interface JoinPeriod {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  maxMember: number;
  status: boolean;
}

function MemberJoinPage() {
  const [titleInput, setTitleInput] = useState('');
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [memberInput, setMemberInput] = useState('');
  const [joinList, setJoinList] = useState<{
    id?: number;
    title: string;
    startDate: string;
    endDate: string;
    maxMember: number;
    isStatus?: boolean;
  }[]>([]);

  // 날짜 변환 함수
  const toISOStringWithMidnight = (dateStr: string) => {
    return new Date(dateStr + 'T00:00:00').toISOString();
  };

  const handleFinish = () => {
    fetchJoinPeriods();
  };

  const handleEdit = () => {
    fetchJoinPeriods();
  };

  // 가입 일정 생성 함수
  const handleCreateJoinPeriod = async () => {
    try {
      if (!titleInput.trim() || !startDateInput.trim() || !endDateInput.trim() || !memberInput.trim()) return;

      const newItem = {
        title: titleInput,
        startDate: toISOStringWithMidnight(startDateInput),
        endDate: toISOStringWithMidnight(endDateInput),
        maxMember: Number(memberInput),
      };

      await postJoinPeriodAPI(newItem);
      await fetchJoinPeriods();

      setTitleInput('');
      setStartDateInput('');
      setEndDateInput('');
      setMemberInput('');
      alert("가입 일정을 생성하였습니다.");
    } catch (error) {
      console.error("가입일정 생성 실패:", error);
      alert("가입 일정 생성에 실패하였습니다.");
    }
  };

  // 가입 일정 조회 함수
  const fetchJoinPeriods = async () => {
      try {
        const res = await getJoinPeriodAPI();
        if (res?.success && Array.isArray(res.data)) {
          const formatted = (res.data as JoinPeriod[]).map((item) => ({
            id: item.id,
            title: item.title,
            startDate: item.startDate.slice(0, 10),
            endDate: item.endDate.slice(0, 10),
            maxMember: item.maxMember,
            isStatus: item.status,
          }));
          setJoinList(formatted);
        }
      } catch (err) {
        console.error('가입 일정 목록 불러오기 실패:', err);
      }
    };
  useEffect(() => {
    fetchJoinPeriods();
  }, []);

  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        <div className="flex-center gap-2 text-[#0B63F8]">
          <JoinIcon className="w-8" />
          <span className="font-bold text-2xl">가입</span>
        </div>

        <div className="w-full flex flex-col items-start gap-4">
          <div className="text-xl font-bold text-[#64748B]">생성</div>

          <div className="p-8 mb-2 w-full rounded-xl flex-center flex-col gap-8 bg-[#FFF] shadow-lg">
            <div className='w-full flex items-center gap-1'>
              <div className="w-32 flex-center text-xl font-bold text-[#64748B]">제목</div>
              <input
                type="text"
                placeholder='제목을 입력해 주세요'
                maxLength={100}
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                className='p-3 w-[34.5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
              />
            </div>

            <div className='w-full flex items-center gap-1'>
              <div className="w-32 flex-center text-lg font-bold text-[#64748B]">가입 시작일</div>
              <input
                type="date"
                value={startDateInput}
                onChange={(e) => setStartDateInput(e.target.value)}
                className='p-3 w-[13rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
              />
              <div className="w-32 flex-center text-lg font-bold text-[#64748B]">가입 종료일</div>
              <input
                type="date"
                value={endDateInput}
                onChange={(e) => setEndDateInput(e.target.value)}
                className='p-3 w-[13rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
              />
            </div>

            <div className='w-full flex justify-between items-center'>
              <div className='w-full flex items-center gap-1'>
                <div className="w-32 flex-center text-lg font-bold text-[#64748B]">최대 모집 인원</div>
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
                  className='p-3 w-[5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
                />
              </div>
              <button
                onClick={handleCreateJoinPeriod}
                className="w-36 h-10 rounded-lg bg-mainBlue text-sm text-[white] font-semibold transition-all duration-150 ease-in-out hover:bg-[#3D72CB]"
              >
                생성하기
              </button>
            </div>
          </div>

          <div className="mt-4 text-xl font-bold text-[#64748B]">기록</div>
          <div className="mb-2 w-full rounded-xl flex flex-col bg-[#FFF] shadow-lg overflow-hidden">
            <div className="p-8 rounded-t-xl w-full flex gap-10 bg-[#E9F1FF] text-[#64748B] font-bold">
              <div className="w-[15rem]">제목</div>
              <div className="w-[15rem]">기간</div>
              <div className="w-[5rem]">가입</div>
              <div className="w-[5rem]">승인</div>
            </div>
            {joinList.map((list, index) => (
              <JoinListCard
                key={index}
                id={list.id}
                title={list.title}
                startDate={list.startDate}
                endDate={list.endDate}
                member={list.maxMember}
                isStatus={list.isStatus}
                onFinish={handleFinish}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberJoinPage;
