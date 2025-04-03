import PageEmptyIcon from '../assets/images/common/pageEmptyIcon.png';

function PageEmptyContent() {
  return (
    <div className="flex-center flex-col">
      <img
        className="w-36"
        src={PageEmptyIcon}
      />
      <p className="m-6 text-3xl font-bold">페이지 공사 중..</p>
      <p className="text-sm text-[#828282] font-semibold">웹사이트를 멋지게 만들고 있어요!</p>
      <p className="text-sm text-[#828282] font-semibold">조금만 기다려 주시면 금방 돌아올게요 : &#41;</p>
    </div>
  )
}

export default PageEmptyContent;
