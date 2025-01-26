import { useNavigate } from "react-router-dom";

export function RecruitButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="mt-8 w-60 h-16 rounded-full bg-mainBlue text-white border-2 border-bg-mainBlue focus:outline-none hover:bg-[#D8E7FF] hover:border-2 hover:border-white hover:text-mainBlue font-bold font-productSans transition-all"
      onClick={() => navigate('/')}
    >
      지원하기
    </button>
  );
}
