import { useState } from 'react';
import { ReactComponent as MemberManagementIcon } from '../shared/assets/icons/member/common/memberManagementIcon.svg';
import ProfileImg from '../shared/assets/images/common/profile.png';
import CustomRadioBox from '../features/auth/ui/CustomRadioBox';
import CustomManagementButton from '../features/member/management/ui/CustomManagementButton';
import ExileModal from '../features/member/management/ui/ExileModal';

function MemberDetailPage() {
  // 상태 관리
  const [selectedRole, setSelectedRole] = useState("team-member");
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        <div className="flex-center gap-2 text-[#0B63F8]">
          <MemberManagementIcon className="w-8" />
          <span className="font-bold text-2xl">회원</span>
        </div>

        {/* 회원정보 */}
        <div className="w-full flex flex-col items-start gap-4">
          <div className="px-3 py-2 w-full rounded-md flex items-center bg-[#D9D9D9] font-semibold">
            회원 정보
          </div>
          <div className="pt-4 pl-6 w-full flex gap-20">
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-48 h-48 rounded-full"
            />
            <div className="flex flex-col gap-7">
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
        </div>

        {/* 회원정보 */}
        <div className="mt-5 w-full flex flex-col items-start gap-4">
          <div className="px-3 py-2 w-full rounded-md flex items-center bg-[#D9D9D9] font-semibold">
            역할 관리
          </div>
          <div className="pt-1 pl-6 flex flex-col gap-2">
            <CustomRadioBox
              isChecked={selectedRole === "organizer"}
              onChange={() => setSelectedRole("organizer")}
              label={
                <>
                  <strong>Organizer:</strong> 운영진 가입 신청 승인/ 회원 역할 변경 권한을 포함한 모든 권한을 가집니다.
                </>
              }
            />
            <CustomRadioBox
              isChecked={selectedRole === "team-member"}
              onChange={() => setSelectedRole("team-member")}
              label={
                <>
                  <strong>Team Member:</strong> 운영진 가입 신청 승인/ 회원 역할 변경 권한을 제외한 모든 권한을 가집니다.
                </>
              }
            />
            <CustomRadioBox
              isChecked={selectedRole === "member"}
              onChange={() => setSelectedRole("member")}
              label={
                <>
                  <strong>Organizer:</strong> 커뮤니티 그라운드 접근 권한을 가집니다.
                </>
              }
            />
            <div className="mt-8">
              <CustomManagementButton
                text="저장"
                option="positive"
              />
            </div>
          </div>

          {/* 회원정보 */}
          <div className="mt-5 w-full flex flex-col items-start gap-4">
            <div className="px-3 py-2 w-full rounded-md flex items-center bg-[#D9D9D9] font-semibold">
              회원 관리
            </div>
            <div className="pt-1 pl-6 mt-4 flex flex-col">
              <CustomManagementButton
                text="추방"
                option="negaitve"
                onClick={() => setIsModalVisible(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalVisible && <ExileModal onClose={() => setIsModalVisible(false)} />}
    </div>
  );
}

export default MemberDetailPage;
