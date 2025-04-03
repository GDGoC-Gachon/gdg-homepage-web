import { ReactComponent as AnalyzeIcon } from '../shared/assets/icons/common/memberAnalyzeIcon.svg';
import AnalyzeCard from '../features/member/analyze/ui/AnalyzeCard';

function MemberAnalyzePage() {
  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        {/* 타이틀 */}
        <div className="flex-center gap-2 text-[#0B63F8]">
          <AnalyzeIcon className="w-8"/>
          <span className="font-bold text-2xl">분석</span>
        </div>

        {/* 컨텐츠 */}
        <div className="w-full flex flex-col items-start gap-4">
          <div className="text-xl font-bold text-[#64748B]">개요</div>
          <div className="px-10 py-12 w-full rounded-xl flex flex-wrap gap-8 bg-[#FFF] shadow-lg">
            <AnalyzeCard value={70} title='총 멤버' changeNum={5}/>
            <AnalyzeCard value={31} title='총 멤버' changeNum={5}/>
            <AnalyzeCard value={201} title='총 멤버' changeNum={100}/>
            <AnalyzeCard value={2} title='총 멤버' changeNum={-5}/>
            <AnalyzeCard value='Backend' title='인기 관심 분야'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberAnalyzePage;
