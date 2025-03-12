function BubbleChatLeft({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-[2.094rem] max-w-[26.75rem] bg-white rounded-xl py-3 px-5 shadow-md before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-0 before:h-0 before:border-[10px] before:border-transparent before:border-r-white before:border-l-0 before:-mt-[10px] before:-ml-[10px]">
      <div className="text-[#344054] font-bold font-googleSansDisplay">{children}</div>
    </div>
  );
}

export default BubbleChatLeft;
