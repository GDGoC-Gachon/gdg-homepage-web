interface StackTagProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const StackTag: React.FC<StackTagProps> = ({ isChecked, onChange, label }) => {
  return (
    <label className="flex items-center cursor-pointer">
      {/* 체크 박스 */}
      <div
        className={`px-3 h-[1.8rem] border border-[0.1rem] border-mainBlue rounded-full flex-center text-sm transition-all duration-200 ease-in-out 
                    ${isChecked ? "text-mainWhite bg-mainBlue" : "text-mainBlue bg-transparent"}`}
        onClick={onChange}
      >
        {/* 라벨 */}
        <span className="text-sm">{label}</span>
      </div>
    </label>
  );
};

export default StackTag;