interface CustomCheckBoxProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ isChecked, onChange, label }) => {
  return (
    <label className="flex items-center cursor-pointer">
      {/* 체크 박스 */}
      <div
        className={`w-4 h-4 border border-[0.1rem] border-mainBlue rounded-[0.2rem] flex-center text-sm text-mainWhite transition-all duration-200 ease-in-out 
                    ${isChecked ? "bg-mainBlue" : "bg-transparent"}`}
        onClick={onChange}
      >
        ✓
      </div>
      {/* 라벨 */}
      <span onClick={onChange} className="pl-2 text-sm">{label}</span>
    </label>
  );
};

export default CustomCheckBox;