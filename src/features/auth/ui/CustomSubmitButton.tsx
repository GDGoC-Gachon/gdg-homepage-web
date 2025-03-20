import { useNavigate } from "react-router-dom";

interface CustomSubmitButtonProps {
  text: string;
  isAvailable: boolean;
  navigateURL: string;
}

function CustomSubmitButton({ text, isAvailable, navigateURL }: CustomSubmitButtonProps) {
  const navigate = useNavigate();
  
  return (
    <button
      className={`w-[12rem] h-[4rem] rounded-full text-mainWhite font-bold transition-all duration-150 ease-in-out
                  ${isAvailable ? `bg-mainBlue hover:bg-[#3D72CB]` : `bg-[#D3D3D3] pointer-events-none`}`}
      onClick={() => navigate(navigateURL)}
    >
      {text}
    </button>
  );
}

export default CustomSubmitButton;
