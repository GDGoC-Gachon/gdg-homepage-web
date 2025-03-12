import { Fade } from 'react-awesome-reveal';
import SectionHeader from './SectionHeader';
import TargetCard from './TargetCard';

function TargetSection() {
  return (
    <div className="w-[100vw] w-max-[62rem]">
      <SectionHeader title="이런 분들에게 가입을 추천드려요" sub_title="Target" />
      <div className="flex gap-[1.606rem] w-fit mx-auto ">
        <Fade cascade damping={0.2}>
          <TargetCard emoji="🙌" text={`커뮤니티를 통해\n적극적으로 소통해보고 싶은 분`} />
          <TargetCard emoji="🔥" text={`열정을 가진\n 가천인이라면 누구나`} />
          <TargetCard emoji="📚" text={`지속적인 학습을 통해\n잠재력을 실현하고자 하는 분`} />
        </Fade>
      </div>
    </div>
  );
}

export default TargetSection;
