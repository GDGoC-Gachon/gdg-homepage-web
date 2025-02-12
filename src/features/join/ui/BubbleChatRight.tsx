function BubbleChatRight({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-[2.438rem] ml-[10%] max-w-[49.25rem] bg-mainBlue rounded-xl py-3 px-5 shadow-md before:content-[''] before:absolute before:top-1/2 before:right-0 before:w-0 before:h-0 before:border-[10px] before:border-transparent before:border-l-mainBlue before:border-r-0 before:-mt-[10px] before:-mr-[10px]">
      <div className="text-white font-bold font-googleSansDisplay">{children}</div>
    </div>
  );
}

export default BubbleChatRight;
