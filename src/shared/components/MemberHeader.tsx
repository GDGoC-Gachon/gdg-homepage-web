import { useState, useEffect } from 'react';
import LogoImg from '../assets/images/common/logo.png';
import ProfileImg from '../assets/images/common/profile.png';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/icons/member/common/memberHomeIcon.svg';
import { ReactComponent as HomeIcon2 } from '../assets/icons/member/common/memberHomeIcon2.svg';
import { ReactComponent as AnalyzeIcon } from '../assets/icons/member/common/memberAnalyzeIcon.svg';
import { ReactComponent as JoinIcon } from '../assets/icons/member/common/memberJoinIcon.svg';
import { ReactComponent as ManagementIcon } from '../assets/icons/member/common/memberManagementIcon.svg';
import { ReactComponent as FaqIcon } from '../assets/icons/member/common/memberFaqIcon.svg';
import LogoutModal from './LogoutModal';
import { getMyPageAPI } from '../../features/auth/api/authAPI';

function MemberHeader() {
  // 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPageInfo, setMyPageInfo] = useState<{
    name: string,
    role: string,
  }>();

  // 직책: member, team, root
  const position = "team" as "member" | "team" | "root";

  const navigate = useNavigate();

  // 버튼 스타일에 동적으로 active 클래스 추가
  const getButtonStyle = (path: string): string => {
    const isActive = location.pathname.startsWith(path);
      return `member-btn-underline font-productSans ${
        isActive ? "text-[#0B63F8]" : "text-[#828282]"
      } text-base text-sm lg:text-base`;
  };

  const getIconColor = (path: string) =>
    location.pathname.startsWith(path) ? 'text-[#0B63F8]' : 'text-[#828282]';

  // 마이페이지 조회 api
  useEffect(() => {
    const fetchMyPage = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.warn('토큰 없음. API 요청 생략');
        return;
      }
      try {
        const data = await getMyPageAPI();
        setMyPageInfo(data.data.member);
        console.log("마이페이지 조회: ", data);
      } catch {
        console.error("마이페이지 조회 api 호출 중 에러 발생");
      }
    };
    fetchMyPage();
  }, []);

  return (
    <div className="px-10 py-8 h-full flex flex-col justify-between fixed bg-[#FFF] shadow-xl">
      <div className="flex flex-col items-start">
        <img
          className="mb-10 w-14 cursor-pointer"
          src={LogoImg}
          alt="logo image"
          onClick={() => navigate('/member/home')}
        />
        <div className="flex items-end gap-2">
          {
            location.pathname === '/member/home' ? (
              <HomeIcon2
                className="w-[1.5rem] cursor-pointer text-[#0B63F8]"
                onClick={() => navigate('/member/home')}
              />
            ) : (
              <HomeIcon
                className="w-[1.5rem] cursor-pointer text-[#828282]"
                onClick={() => navigate('/member/home')}
              />
            )
          }
          <button
            className={getButtonStyle('/member/home')}
            onClick={() => navigate('/member/home')}
          >
            커뮤니티 그라운드
          </button>
        </div>
        {position !== "member" && (
          <>
            <p className="mt-6">----------------------</p>
            <div className="mt-6 flex items-end gap-2">
              <AnalyzeIcon
                className={`w-[1.5rem] cursor-pointer ${getIconColor('/member/analyze')}`}
                onClick={() => navigate('/member/analyze')}
              />
              <button
                className={getButtonStyle('/member/analyze')}
                onClick={() => navigate('/member/analyze')}
              >
                분석
              </button>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <JoinIcon
                className={`w-[1.5rem] cursor-pointer ${getIconColor('/member/join')}`}
                onClick={() => navigate('/member/join')}
              />
              <button
                className={getButtonStyle('/member/join')}
                onClick={() => navigate('/member/join')}
              >
                가입
              </button>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <ManagementIcon
                className={`w-[1.5rem] cursor-pointer ${getIconColor('/member/management')}`}
                onClick={() => navigate('/member/management')}
              />
                <button
                  className={getButtonStyle('/member/management')}
                  onClick={() => navigate('/member/management')}
                >
                  회원
                </button>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <FaqIcon
                className={`w-[1.5rem] cursor-pointer ${getIconColor('/member/faq')}`}
                onClick={() => navigate('/member/faq')}
              />
                <button
                  className={getButtonStyle('/member/faq')}
                  onClick={() => navigate('/member/faq')}
                >
                  설정
                </button>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-start">
        <div className="px-4 py-[0.08rem] rounded-full bg-mainBlue flex-center text-mainWhite text-[0.6rem]">{myPageInfo?.role ?? 'MEMBER'}</div>
        <div className="mt-2 flex items-center gap-2 text-sm text-[#171D23]">
          <img
            className="w-8 h-8 rounded-full"
            src={ProfileImg}
            alt="profile image"
          />
          <div>{myPageInfo?.name ?? '알 수 없음'}</div>
        </div>
        <div className="mt-4 text-sm cursor-pointer" onClick={() => setIsModalVisible(true)}>로그아웃</div>
      </div>

      {/* 모달 */}
      {isModalVisible && <LogoutModal onClose={() => setIsModalVisible(false)} />}
    </div>
  )
}

export default MemberHeader;
