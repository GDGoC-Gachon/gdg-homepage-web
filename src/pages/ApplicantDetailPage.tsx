import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as MemberManagementIcon } from '../shared/assets/icons/member/common/memberManagementIcon.svg';
import CustomManagementButton from '../features/member/management/ui/CustomManagementButton';
import JoinRejectModal from '../features/member/management/ui/JoinRejectModal';
import { getApplicantListAPI, getMemberDetailAPI, putMemberApproveAPI } from '../features/member/management/api/managementAPI';

// 멤버 상세정보 인터페이스
interface MemberDetail {
  member: {
    memberId: number;
    email: string;
    name: string;
    grade: string;
    studentId: string;
    phoneNumber: string;
    role: string;
    approved: boolean;
  };
  major: string;
  field: string;
  stack: string;
}

// 페이지 전환용 인터페이스
interface Applicant {
  memberId: number;
  email: string;
  name: string;
  grade: string;
  studentId: string;
  phoneNumber: string;
  role: string;
  approved: boolean;
}

function ApplicantDetailPage() {
  // 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [memberDetail, setMemberDetail] = useState<MemberDetail | null>(null);
  const [applicantList, setApplicantList] = useState<Applicant[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  // 현재 페이지 위치
  const currentIndex = applicantList.findIndex((item) => item.memberId === Number(id));
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex === applicantList.length - 1 || currentIndex === -1;

  // 신청자 상세 조회 api 호출
  useEffect(() => {
    const fetchMemberDetail = async () => {
      try {
        const res = await getMemberDetailAPI(Number(id));
        setMemberDetail(res.data);
      } catch (error) {
        console.error('신청자 상세 조회 실패:', error);
      }
    };
    if (id) fetchMemberDetail();
  }, [id]);

  // 신청자 리스트 조회 api 호출
  useEffect(() => {
    const fetchApplicantList = async () => {
      try {
        const res = await getApplicantListAPI({ page: 1, size: 100 });
        setApplicantList(res.data.data.result);
      } catch (error) {
        console.error('신청자 목록 조회 실패:', error);
      }
    };
    fetchApplicantList();
  }, []);

  // 이전 페이지 이동
  const handlePrev = () => {
    if (isFirst) return;
    const prevId = applicantList[currentIndex - 1].memberId;
    navigate(`/member/management/applicant/${prevId}`);
  };
  // 다음 페이지 이동
  const handleNext = () => {
    if (isLast) return;
    const nextId = applicantList[currentIndex + 1].memberId;
    navigate(`/member/management/applicant/${nextId}`);
  };

  // 멤버 승인 API 호출
  const handleApprove = async () => {
    try {
      if (!memberDetail) return;
      const data = {
        userId: memberDetail.member.memberId
      };
      const res = await putMemberApproveAPI(data);
      setMemberDetail(res.data);
      alert('승인이 완료되었습니다.');

      // 승인 후 다음 멤버로 자동 이동
      if (!isLast) {
        const nextId = applicantList[currentIndex + 1].memberId;
        navigate(`/member/management/applicant/${nextId}`);
      } else {
        navigate('/member/managemnt');
      }
    } catch (error) {
      console.error('멤버 승인 실패:', error);
    }
  };

  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        <div className="w-full flex items-center justify-between text-[#0B63F8]">
          <div className="flex gap-2">
            <MemberManagementIcon className="w-8"/>
            <span className="font-bold text-2xl">회원</span>
          </div>
          <div className="flex-center gap-8">
            <div className={`flex-center gap-1 text-xl font-bold ${isFirst ? 'text-[#B4B4B4] cursor-default' : 'text-[#666666] cursor-pointer'}`} onClick={handlePrev}>
              &#60;<span className="text-sm">Prev</span>
            </div>
            <div className={`flex-center gap-1 text-xl font-bold ${isLast ? 'text-[#B4B4B4] cursor-default' : 'text-[#666666] cursor-pointer'}`} onClick={handleNext}>
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
                  <span className="font-normal">{memberDetail?.member.name}</span>
                </p>
                <p className="font-bold">
                  학년:&nbsp;
                  <span className="font-normal">{memberDetail?.member.grade}</span>
                </p>
                <p className="font-bold">
                  학번:&nbsp;
                  <span className="font-normal">{memberDetail?.member.studentId}</span>
                </p>
                <p className="font-bold">
                  역할:&nbsp;
                  <span className="font-normal">{memberDetail?.member.role}</span>
                </p>
              </div>
              <div className="w-80 flex flex-col gap-2">
                <p className="font-bold">
                  이메일:&nbsp;
                  <span className="font-normal">{memberDetail?.member.email}</span>
                </p>
                <p className="font-bold">
                  휴대폰 번호:&nbsp;
                  <span className="font-normal">{memberDetail?.member.phoneNumber}</span>
                </p>
                {/* <p className="font-bold">
                  가입일:&nbsp;
                  <span className="font-normal">2025/02/26</span>
                </p> */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">
                관심 기술 분야:&nbsp;
                <span className="font-normal">{memberDetail?.field}</span>
              </p>
              <p className="font-bold">
                보유/관심 기술 스택:&nbsp;
                <span className="font-normal">{memberDetail?.stack}</span>
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
              onClick={handleApprove}
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

export default ApplicantDetailPage;
