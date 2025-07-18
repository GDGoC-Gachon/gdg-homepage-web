import { useState, useEffect } from 'react';
import { ReactComponent as AnalyzeIcon } from '../shared/assets/icons/member/common/memberAnalyzeIcon.svg';
import AnalyzeCard from '../features/member/analyze/ui/AnalyzeCard';
import { getAdminAnalyticAPI } from '../features/member/analyze/api/analyzeAPI';

function MemberAnalyzePage() {
  const [analytics, setAnalytics] = useState<{
    totalMember: number,
    memberIncrease: number,
    registerCount: number,
    registerIncrease: number,
    deactivateMemberCount: number,
    deactivationsIncrease: number,
    pageView: number,
    pageViewIncrease: number,
    popularStack: string;
  }>();

  // 분석결과 조회 api
  useEffect(() => {
    const fetchAnalytics = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.warn('토큰 없음. API 요청 생략');
        return;
      }
      try {
        const data = await getAdminAnalyticAPI();
        setAnalytics(data.data);
      } catch {
        console.error("분석결과 조회 api 호출 중 에러 발생");
      }
    };
    fetchAnalytics();
  }, []);

  // 인기 관심 분야 포맷 함수
  function parseFirstTech(raw?: string): string | null {
    if (!raw) return null;
    const cleaned = raw.replace(/[[\]\s]/g, '');
    const list = cleaned.split(',');
    return list[0] || null;
  }

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
            <AnalyzeCard
              value={analytics?.totalMember ?? 0}
              title='총 멤버'
              changeNum={analytics?.memberIncrease ?? 0}
            />
            <AnalyzeCard
              value={analytics?.registerCount ?? 0}
              title='가입 신청'
              changeNum={analytics?.registerIncrease ?? 0}
            />
            <AnalyzeCard
              value={analytics?.pageView ?? 0}
              title='페이지 뷰'
              changeNum={analytics?.pageViewIncrease ?? 0}
            />
            <AnalyzeCard
              value={analytics?.deactivateMemberCount ?? 0}
              title='탈퇴'
              changeNum={analytics?.deactivationsIncrease ?? 0}
            />
            <AnalyzeCard
              value={parseFirstTech(analytics?.popularStack) ?? "-"}
              title='인기 관심 분야'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberAnalyzePage;
