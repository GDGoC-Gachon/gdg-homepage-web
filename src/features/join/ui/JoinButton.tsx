import { useNavigate } from "react-router-dom";

interface JoinButtonProps {
  children: React.ReactNode;
  color: string;
  font_color: string;
  isRecruit?: boolean;
}

function JoinButton({ children, color, font_color, isRecruit }: JoinButtonProps) {
  const navigate = useNavigate();
  
  return (
    <button
      style={{
        backgroundColor: isRecruit ? color : '#E4E4E4',
        color: font_color,
        transition: 'background-color 0.3s ease',
        cursor: isRecruit ? 'pointer' : 'default',
      }}
      className="w-full max-w-[37rem] p-[1.25rem] rounded-[50px] font-bold font-googleSansDisplay transition-all shadow-button-shadow"
      onMouseEnter={(e) => {
        if (isRecruit) {
          e.currentTarget.style.backgroundColor = '#DAE8FF';
          e.currentTarget.style.cursor = 'default';
        }
      }}
      onMouseLeave={(e) => {
        if (isRecruit) {
          e.currentTarget.style.backgroundColor = color;
        }
      }}
      onClick={isRecruit ? () => navigate('/signup/step1') : undefined}
    >
      {isRecruit ? children : '지금은 가입기간이 아닙니다!'}
    </button>
  );
}

export default JoinButton;
