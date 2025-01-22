import { ReactComponent as EnterIcon } from '../../../shared/assets/icons/main/enter.svg';
import { NewsCardItem } from '../type/NewsCardItem';

type NewsCardProps = {
  news: NewsCardItem;
}

function NewsCard({ news }: NewsCardProps) {
  return (
    <div
      className="py-5 w-[19.3125rem] h-[29.125rem] flex flex-col justify-between items-center bg-white cursor-pointer
                  hover-up hover-up:hover hover-up-shadow hover-up-shadow:hover"
      onClick={()=>window.open("https://www.instagram.com/gdg.gachon/", "_blank")}
    >
      <div
        className="w-[16.92625rem] h-[16.108125rem] bg-cover"
        style={{ backgroundImage: `url(${news.imgUrl})` }}
      ></div>
      <div className="w-[16.92625rem] font-productSans">
        <p className="mb-2 text-xs text-mainBlue font-bold">{news.type}</p>
        <div className="flex justify-between items-center">
          <h4 className="text-xl text-black-800 font-bold text-ellipsis-1">{news.title}</h4>
          <EnterIcon/>
        </div>
        <p className="my-1 text-sm text-[#667085] text-ellipsis-1">
          &#91;{news.subTitle}&#93;
        </p>
        <p className="text-sm text-[#667085] text-ellipsis-2">
          &#58; {news.description}
        </p>
      </div>
      <div className="w-[16.92625rem] text-xs text-[#667085] font-inter">
        {news.date}
      </div>
    </div>
  )
}

export default NewsCard;
