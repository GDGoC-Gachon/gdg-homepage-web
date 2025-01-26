import { useRef, useEffect } from "react";
import { scrollToSection } from "../features/main/lib/scrollToSection";
import WelcomeSection from "../features/main/ui/WelcomeSection";
import DescriptionSection from "../features/main/ui/DescriptionSection";
import NewsSection from "../features/main/ui/NewsSection";

function MainPage() {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  
  // 새로고침 시 페이지 상단으로 이동
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  
  return (
    <div 
      className="h-[3006px] flex flex-col justify-between bg-mainBg bg-contain min-w-[1440px]"
    >
      <WelcomeSection onArrowClick={() => descriptionRef.current && scrollToSection(descriptionRef.current)} />
      <div ref={descriptionRef}>
        <DescriptionSection onArrowClick={() => newsRef.current && scrollToSection(newsRef.current)} />
      </div>
      <div ref={newsRef}>
        <NewsSection/>
      </div>
    </div>
  );
}

export default MainPage;
