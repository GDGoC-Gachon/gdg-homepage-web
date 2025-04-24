import { useState } from 'react';
import { ReactComponent as MemberManagementIcon } from '../shared/assets/icons/member/common/memberManagementIcon.svg';
import MemberListCard from '../features/member/management/ui/MemberListCard';
import { memberList, applyMemberList } from '../features/member/management/model/memberList';

function MemberManagementPage() {
  // 상태 관리
  const [memberButton, setMemberButton] = useState('member');
  
  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        <div className="flex-center gap-2 text-[#0B63F8]">
          <MemberManagementIcon className="w-8" />
          <span className="font-bold text-2xl">회원</span>
        </div>

        <div className="w-full flex flex-col items-start gap-4">
          <div className="flex items-center gap-6">
            <div
              onClick={() => setMemberButton('member')}
              className={`text-xl font-bold ${memberButton === 'member' ? 'text-[#64748B]' : 'text-[#B4B4B4]'} cursor-pointer`}
            >
              멤버
            </div>
            <div
              onClick={() => setMemberButton('apply')}
              className={`text-xl font-bold ${memberButton === 'apply' ? 'text-[#64748B]' : 'text-[#B4B4B4]'} cursor-pointer`}
            >
              신청
            </div>
          </div>
          <div className="mb-2 w-[64rem] rounded-xl flex flex-col bg-[#FFF] shadow-lg overflow-hidden">
            <div className="p-8 rounded-t-xl w-full flex gap-10 bg-[#E9F1FF] text-[#64748B] font-bold">
              <div className="w-[5rem] overflow-hidden">이름</div>
              <div className="w-[12rem] overflow-hidden">이메일</div>
              <div className="w-[5rem] overflow-hidden">학년</div>
              <div className="w-[5rem] overflow-hidden">학번</div>
              <div className="w-[7rem] overflow-hidden">휴대폰 번호</div>
              <div className="w-[7rem] overflow-hidden">역할</div>
            </div>
            {memberButton === 'member' ? (memberList.map((list, index) => (
              <MemberListCard
                key={index}
                name={list.name}
                email={list.email}
                grade={list.grade}
                number={list.number}
                phoneNumber={list.phoneNumber}
                role={list.role}
                isMember={true}
              />
            ))) : (
              applyMemberList.map((list, index) => (
                <MemberListCard
                  key={index}
                  name={list.name}
                  email={list.email}
                  grade={list.grade}
                  number={list.number}
                  phoneNumber={list.phoneNumber}
                  role={list.role}
                  isMember={false}
                />
              ))
            )
          }
          </div>

        </div>
      </div>
    </div>
  );
}

export default MemberManagementPage;
