import { ReactComponent as ArrowIcon } from '../../../shared/assets/icons/main/arrow.svg';
import { RecruitButton } from './RecruitButotn';

function WelcomeSection() {
  return (
    <div className="flex-center flex-col w-screen h-screen-without-header bg-mainDot bg-no-repeat bg-[length:23rem_auto] text-center">
      <h1 className="text-6xl font-productSans font-bold">Welcome to</h1>
      <h2 className="mt-6 font-productSans text-[2.8488rem] font-bold">GDG on Campus Gachon</h2>
      <ArrowIcon className="my-10 cursor-pointer"/>
      <p className="text-xl font-poductSans font-bold">지금 바로 GDG GCU에 합류해 보세요!</p>
      <RecruitButton/>
    </div>
  );
}

export default WelcomeSection;
