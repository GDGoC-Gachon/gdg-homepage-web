import { useState } from 'react';
import { ReactComponent as MemberManagementIcon } from '../shared/assets/icons/member/common/memberManagementIcon.svg';
import CustomManagementButton from '../features/member/management/ui/CustomManagementButton';
import JoinRejectModal from '../features/member/management/ui/JoinRejectModal';

function ApplicantManagementPage() {
  // 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        <div className="w-full flex items-center justify-between text-[#0B63F8]">
          <div className="flex gap-2">
            <MemberManagementIcon className="w-8"/>
            <span className="font-bold text-2xl">회원</span>
          </div>
          <div className="flex-center gap-8">
            <div className="flex-center gap-1 text-xl font-bold text-[#B4B4B4] cursor-default">
              &#60;<span className="text-sm">Prev</span>
            </div>
            <div className="flex-center gap-1 text-xl font-bold text-[#666666] cursor-pointer">
              <span className="text-sm">Next</span>&#62;
            </div>
          </div>
        </div>

        {/* 신청자 정보 */}
        <div className="w-full flex flex-col items-start gap-4">
          <div className="px-3 py-2 w-full rounded-md flex items-center bg-[#D9D9D9] font-semibold">
            신청자 정보
          </div>
          <div className="pt-4 pl-6 flex flex-col gap-7">
            <div className="flex">
              <div className="w-72 flex flex-col gap-2">
                <p className="font-bold">
                  이름:&nbsp;
                  <span className="font-normal">홍길동</span>
                </p>
                <p className="font-bold">
                  학년:&nbsp;
                  <span className="font-normal">3학년</span>
                </p>
                <p className="font-bold">
                  학번:&nbsp;
                  <span className="font-normal">123456789</span>
                </p>
                <p className="font-bold">
                  역할:&nbsp;
                  <span className="font-normal">Team Member</span>
                </p>
              </div>
              <div className="w-80 flex flex-col gap-2">
                <p className="font-bold">
                  이메일:&nbsp;
                  <span className="font-normal">test@test.com</span>
                </p>
                <p className="font-bold">
                  휴대폰 번호:&nbsp;
                  <span className="font-normal">010-1234-5678</span>
                </p>
                <p className="font-bold">
                  가입일:&nbsp;
                  <span className="font-normal">2025/02/26</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                관심 기술 분야:&nbsp;
                <span className="font-normal">Backend</span>
              </p>
              <p className="font-bold">
                보유/관심 기술 스택:&nbsp;
                <span className="font-normal">Springboot</span>
              </p>
            </div>
          </div>
        </div>

        {/* 신청자 관리 */}
        <div className="mt-5 w-full flex flex-col items-start gap-4">
          <div className="px-3 py-2 w-full rounded-md flex items-center bg-[#D9D9D9] font-semibold">
            신청자 관리
          </div>
          <div className="pt-1 pl-6 mt-2 flex gap-6">
            <CustomManagementButton
              text="승인"
              option="positive"
            />
            <CustomManagementButton
              text="거절"
              option="negaitve"
              onClick={() => setIsModalVisible(true)}
            />
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalVisible && <JoinRejectModal onClose={() => setIsModalVisible(false)} />}
    </div>
  );
}

export default ApplicantManagementPage;
