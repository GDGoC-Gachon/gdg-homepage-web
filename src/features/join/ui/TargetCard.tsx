function TargetCard({ emoji, text }: { emoji: string; text: string }) {
  // \n을 기준으로 볼드체, 일반처리 처리
  const [boldText, ...restText] = text.split('\n');

  return (
    <div className="w-[19.4rem] py-[2.313rem] flex flex-col items-center gap-[0.688rem] text-center bg-mainBlue text-[white] rounded-[2.2rem]">
      <div className="text-[5.5rem]">{emoji}</div>
      <div className="flex flex-col">
        <div className="font-bold font-googleSansDisplay">{boldText}</div>
        <div className="font-normal font-googleSansDisplay">{restText.join('')}</div>
      </div>
    </div>
  );
}

export default TargetCard;
