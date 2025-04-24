import { ReactComponent as MemberManagementIcon } from '../shared/assets/icons/member/common/memberManagementIcon.svg';

function MemberDetailPage() {
  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        <div className="flex-center gap-2 text-[#0B63F8]">
          <MemberManagementIcon className="w-8" />
          <span className="font-bold text-2xl">회원</span>
        </div>

        <div className="w-full flex flex-col items-start gap-4">
          
        </div>
      </div>
    </div>
  );
}

export default MemberDetailPage;
