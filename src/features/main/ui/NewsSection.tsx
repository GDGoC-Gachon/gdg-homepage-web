import NewsCard from "./NewsCard";

function NewsSection() {
  return (
    <div className="flex-center flex-col w-screen font-productSans">
      <p className="mt-8 text-sm text-[#5C5C5C] font-normal">Latest news</p>
      <h3 className="text-[1.6875rem] font-bold">최근 소식</h3>
      <div className="mt-10 mb-64 w-[62rem] flex justify-between">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
      </div>
    </div>
  )
}

export default NewsSection;
