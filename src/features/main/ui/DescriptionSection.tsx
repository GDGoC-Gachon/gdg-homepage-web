import { ReactComponent as ArrowIcon } from '../../../shared/assets/icons/main/arrow.svg';
import { Fade } from 'react-awesome-reveal';

type WelcomeSectionProps = {
  onArrowClick: () => void;
};

function DescriptionSection({ onArrowClick }: WelcomeSectionProps) {
  return (
    <Fade duration={2000} triggerOnce>
      <div
        className="flex-center flex-col w-screen h-main-section text-xl font-productSans font-bold"
      >
        <div className="flex flex-col items-center w-[70rem] h-[18.9538rem] bg-mainSquarePattern bg-no-repeat bg-full-width">
          <p className="my-5"><span className="text-2xl">GDG on Campus</span>는</p>
          <p><span className="text-2xl">Google Developer Group on Campus</span>의 약자로,</p>
          <p className="my-5">구글에서 지원하는 대학생 개발자 커뮤니티입니다.</p>
        </div>
        <div className="w-[52rem] flex justify-between text-xs text-center leading-[2.4125rem]">
          <div className="w-[6.25rem] h-[2.4125rem] bg-mainMiniSquare bg-no-repeat bg-full-width">#Connect</div>
          <div className="w-[6.25rem] h-[2.4125rem] bg-mainMiniSquare bg-no-repeat bg-full-width">#Learn</div>
          <div className="w-[6.25rem] h-[2.4125rem] bg-mainMiniSquare bg-no-repeat bg-full-width">#Grow</div>
        </div>
        <ArrowIcon
          className="mt-20 cursor-pointer animate-fadeInOut"
          onClick={onArrowClick}
        />
      </div>
    </Fade>
  )
}

export default DescriptionSection;
