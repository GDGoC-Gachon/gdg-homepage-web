import { ReactComponent as ArrowIcon } from '../../../shared/assets/icons/main/arrow.svg';
import { RecruitButton } from './RecruitButton';
import { Fade } from 'react-awesome-reveal';

type WelcomeSectionProps = {
  onArrowClick: () => void;
};

function WelcomeSection({ onArrowClick }: WelcomeSectionProps) {
  return (
    <div className="flex-center flex-col w-screen h-main-section bg-mainDot bg-no-repeat bg-[length:23rem_auto] text-center">
      <h1 className="text-6xl font-productSans font-bold">
        <Fade cascade damping={0.05} triggerOnce>Welcome to</Fade>
      </h1>
      <h2 className="mt-6 font-productSans text-[2.8488rem] font-bold">
        <Fade cascade damping={0.05} delay={500} triggerOnce>GDG on Campus Gachon</Fade>
      </h2>
      <ArrowIcon
        className="my-10 cursor-pointer animate-fadeInOut"
        onClick={onArrowClick}
      />
      <p className="text-xl font-productSans font-bold">지금 바로 <span className="text-2xl">GDG GCU</span>에 합류해 보세요!</p>
      <RecruitButton/>
    </div>
  );
}

export default WelcomeSection;
