import { useState } from "react";
import { FAQData } from "../features/faq/model/FAQData";
import { FAQToggle } from "../features/faq/ui/FAQToggle";
import LOGO from "../shared/assets/images/common/earth_logo.png";
import { FAQButton } from "../features/faq/ui/FAQButton";

function FAQPage() {
  const [closeQAs, setCloseQAs] = useState<Set<number>>(new Set()); // 닫혀있는 답변 상태

  // 답변 토글 함수
  const toggleQA = (id: number) => {
    setCloseQAs((prev) => {
      const newQAs = new Set(prev);
      if (newQAs.has(id)) {
        newQAs.delete(id);
      } else {
        newQAs.add(id);
      }
      return newQAs;
    });
  };

  // 카카오톡 문의하러가기
  const inquiryKaKao = () => {
    window.open("/", "_blank"); // 임시링크
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-[8.25rem] pb-[17.875rem]">
      <div className="max-w-5xl flex flex-col items-center text-black-800">
        <div className="text-4xl font-bold font-productSans">FAQ</div>
        <div className="text-base font-normal font-productSans leading-10">
          Frequently asked questions
        </div>
      </div>
      <div className="w-full max-w-3xl pt-20 flex flex-col items-center">
        {FAQData.map((faq) => (
          <FAQToggle
            key={faq.id}
            faq={faq}
            isClose={closeQAs.has(faq.id)}
            onToggle={() => toggleQA(faq.id)}
          />
        ))}
      </div>
      <div className="w-full max-w-3xl pt-36 flex flex-col items-center">
        <img className="mb-8" src={LOGO} />
        <div className="w-full flex flex-col items-center gap-2">
          <p className="text-xl font-bold font-productSans text-black-800">
            더 궁금한 점이 있으신가요?
          </p>
          <p className="text-[1.125rem] font-normal font-productSans text-[#667085]">
            카카오톡으로 문의주세요!
          </p>
          <FAQButton onClick={inquiryKaKao} />
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
