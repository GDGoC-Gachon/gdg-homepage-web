interface CustomButtonProps {
  text: string;
}

function CustomButton({ text }: CustomButtonProps) {
  const isConfirm = text === "확인";

  return (
    <button
      className={`w-[10rem] h-[3rem] rounded-full text-sm font-bold transition-all duration-150 ease-in-out
                  ${isConfirm ? "bg-[#DAE8FF] text-mainBlue hover:bg-[#D1DDF2]" : "bg-mainBlue text-mainWhite hover:bg-[#3D72CB]"}`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
