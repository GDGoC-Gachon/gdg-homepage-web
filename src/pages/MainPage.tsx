import WelcomeSection from "../features/main/ui/WelcomeSection";
import DescriptionSection from "../features/main/ui/DescriptionSection";
import NewsSection from "../features/main/ui/NewsSection";

function MainPage() {
  return (
    <div 
      className="h-[3006px] flex flex-col justify-between bg-mainBg bg-contain min-w-[1440px]"
    >
      <WelcomeSection/>
      <DescriptionSection/>
      <NewsSection/>
    </div>
  );
}

export default MainPage;
