import { useState, useEffect } from 'react';
import ScheduleSection from '../features/join/ui/ScheduleSection';
import TargetSection from '../features/join/ui/TargetSection';
import BenefitSection from '../features/join/ui/BenefitSection';
import JoinButton from '../features/join/ui/JoinButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function JoinPage() {
  // state 관리
  const [isRecruit] = useState(true);

  // 새로고침 시 페이지 상단으로 이동
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <>
      <div className="fixed top-[8.375rem] right-[6.25rem] z-20">
        <JoinButton color="#F1F3F4" font_color="#4285F4" isRecruit={isRecruit}>
          <FontAwesomeIcon icon={faPaperPlane} color="#4285F4" width={26} />
          <span className="ml-[10px]">신청서 작성하러 바로가기</span>
        </JoinButton>
      </div>
      <div className="w-full flex flex-col justify-between overflow-x-hidden">
        <div className="w-full h-[3006px] flex flex-col items-center justify-center gap-[18.75rem] bg-joinBg bg-contain min-w-[100vw]">

          {/* 스케줄 섹션 */}
          <ScheduleSection isRecruit={isRecruit}/>

          {/* 타겟 섹션 */}
          <TargetSection />

          {/* 베네핏 섹션 */}
          <BenefitSection />

          <div className="flex justify-center w-full mb-20">
            <JoinButton color="#F1F3F4" font_color="#4285F4" isRecruit={isRecruit}>
              신청서 작성하러가기
            </JoinButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinPage;
