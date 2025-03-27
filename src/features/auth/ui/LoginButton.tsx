import { useNavigate } from "react-router-dom";

interface LoginButtonProps {
  children: React.ReactNode;
  color: string;
  font_color: string;
}

function LoginButton({ children, color, font_color }: LoginButtonProps) {
  const navigate = useNavigate();
  
  return (
    <button
      style={{
        color: font_color,
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
      }}
      className="w-80 p-4 rounded-[50px] font-bold font-googleSansDisplay transition-all shadow-button-shadow"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#DAE8FF';
        e.currentTarget.style.cursor = 'default';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
      onClick={() => navigate('/')}
    >
      {children}
    </button>
  );
}

export default LoginButton;
