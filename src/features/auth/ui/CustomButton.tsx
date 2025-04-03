interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

function CustomButton({ text, disabled = false, onClick }: CustomButtonProps) {
  const isConfirm = text === "확인";

  const baseStyle = `w-[10rem] h-[3rem] rounded-full text-sm font-bold transition-all duration-150 ease-in-out`;
  const style = disabled
    ? "bg-[#D3D3D3] text-white cursor-default"
    : isConfirm
    ? "bg-[#DAE8FF] text-mainBlue hover:bg-[#D1DDF2]"
    : "bg-mainBlue text-mainWhite hover:bg-[#3D72CB]";

  return (
    <button type="button" className={`${baseStyle} ${style}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default CustomButton;
