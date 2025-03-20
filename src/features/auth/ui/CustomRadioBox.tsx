interface CustomRadioBoxProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const CustomRadioBox: React.FC<CustomRadioBoxProps> = ({ isChecked, onChange, label }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onChange}>
      {/* 라디오 박스 */}
      <div
        className={`w-4 h-4 rounded-full border transition-all duration-200 ease-in-out 
                   ${isChecked ? "border-4 border-mainBlue bg-transparent" : "border-2 border-mainBlue bg-transparent"}`}
      ></div>
      {/* 라벨 */}
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default CustomRadioBox;