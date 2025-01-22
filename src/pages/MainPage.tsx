import WelcomeSection from "../features/main/ui/WelcomeSection";
import DescriptionSection from "../features/main/ui/DescriptionSection";

function MainPage() {
  return (
    <div 
      className="h-[3006px] flex flex-col justify-between bg-mainBg bg-contain min-w-[1440px]" 
    >
      <WelcomeSection/>
      <DescriptionSection/>
    </div>
  );
}

export default MainPage;
