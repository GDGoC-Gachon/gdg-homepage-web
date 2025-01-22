import { ReactComponent as EnterIcon } from '../../../shared/assets/icons/main/enter.svg';

function NewsCard() {
  return (
    <div className="py-5 w-[19.3125rem] h-[29.125rem] flex flex-col justify-between items-center bg-white shadow-lg">
      <div className="w-[16.92625rem] h-[16.108125rem] bg-mainNewsCard2 bg-cover"></div>
      <div className="w-[16.92625rem] font-productSans">
        <p className="mb-2 text-xs text-mainBlue font-bold">conference</p>
        <div className="flex justify-between items-center">
          <h4 className="text-xl text-black-800 font-bold">남궁성의 취업 세미나</h4>
          <EnterIcon/>
        </div>
        <p className="my-1 text-sm text-[#667085]">
          &#91;자바의 정석 저자 남궁성과 함께하는 취업세미나&#93;
        </p>
        <p className="text-sm text-[#667085]">
          &#58; AI 시대에서 개발자로 살아남기
        </p>
      </div>
      <div className="w-[16.92625rem] text-xs text-[#667085] font-inter">
        20 Jan 2022
      </div>
    </div>
  )
}

export default NewsCard;
