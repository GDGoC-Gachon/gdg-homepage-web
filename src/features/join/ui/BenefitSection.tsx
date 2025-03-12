import { Fade } from 'react-awesome-reveal';
import { ChatData } from '../model/ChatData';
import BubbleChatLeft from './BubbleChatLeft';
import BubbleChatRight from './BubbleChatRight';
import SectionHeader from './SectionHeader';

function BenefitSection() {
  return (
    <div className="w-[100vw] w-max-[62rem] flex flex-col items-center">
      <SectionHeader title="가입하면 이런 점이 좋아요" sub_title="Benefits" />
      <div className="mt-[6rem]">
        {ChatData.map((data) => (
          <>
            <Fade damping={0.03} direction="up" triggerOnce>
              <BubbleChatLeft>{data.question}</BubbleChatLeft>
              <BubbleChatRight>{data.answer}</BubbleChatRight>
            </Fade>
          </>
        ))}
      </div>
    </div>
  );
}

export default BenefitSection;
