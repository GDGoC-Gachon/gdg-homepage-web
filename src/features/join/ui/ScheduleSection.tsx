import { useState } from 'react';
import modal from '../../../shared/assets/images/common/schedule_modal.png';
import SectionHeader from './SectionHeader';
import { Fade } from 'react-awesome-reveal';
function ScheduleSection() {
  const [isRecruit] = useState(false);
  return (
    <div className="w-[100vw] w-max-[62rem]">
      <SectionHeader title="가입일정" sub_title="Schedule" />
      <Fade cascade damping={0.05} direction="up" triggerOnce>
        <div className="relative w-fit mx-auto">
          {/* 이미지 */}
          <img className="mx-auto" src={modal} alt="가입 일정" />

          {/* 이미지 위에 올라갈 문구 */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/ text-mainBlue font-googleSansDisplay font-bold">
            {isRecruit ? '가입기간입니다!' : '지금은 가입기간이 아닙니다!'}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ScheduleSection;
