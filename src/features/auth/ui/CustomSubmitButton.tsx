interface CustomSubmitButtonProps {
  text: string;
  isAvailable: boolean;
  onClick: () => void;
}

function CustomSubmitButton({ text, isAvailable, onClick }: CustomSubmitButtonProps) {
  
  return (
    <button
      className={`w-[12rem] h-[4rem] rounded-full text-mainWhite font-bold transition-all duration-150 ease-in-out
                  ${isAvailable ? `bg-mainBlue hover:bg-[#3D72CB]` : `bg-[#D3D3D3] pointer-events-none`}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomSubmitButton;
