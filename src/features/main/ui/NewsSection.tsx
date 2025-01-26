import NewsCard from "./NewsCard";
import { NewsCardData } from "../model/NewsCardData";
import { Fade } from "react-awesome-reveal";

function NewsSection() {
  return (
    <div className="flex-center flex-col w-screen font-productSans mt-[4.125rem]">
      <p className="mt-8 text-sm text-[#5C5C5C] font-normal">Latest news</p>
      <h3 className="text-[1.6875rem] font-bold">최근 소식</h3>
      <div className="h-[29.125rem] mt-10 mb-64 w-[62rem] flex justify-between">
        <Fade cascade damping={0.2}>
          {NewsCardData.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default NewsSection;
