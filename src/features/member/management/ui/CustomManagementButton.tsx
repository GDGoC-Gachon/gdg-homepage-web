interface CustomManagementButtonProps {
  text: string;
  option: string;
  disabled?: boolean;
  onClick?: () => void;
}

function CustomManagementButton({ text, option, disabled = false, onClick }: CustomManagementButtonProps) {
  const isPositive = option === "positive";

  const baseStyle = `w-[7rem] h-[2.5rem] rounded-full text-sm font-bold transition-all duration-150 ease-in-out`;
  const style = disabled
    ? "bg-[#D3D3D3] text-white cursor-default"
    : isPositive
    ? "bg-mainBlue text-mainWhite hover:bg-[#3D72CB]"
    : "bg-mainRed text-mainWhite hover:bg-[#CD3B2F]";

  return (
    <button type="button" className={`${baseStyle} ${style}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default CustomManagementButton;
