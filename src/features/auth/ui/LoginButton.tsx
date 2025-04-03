interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: string;
  font_color: string;
}

function LoginButton({ children, color, font_color, ...rest }: LoginButtonProps) {
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
      {...rest}
    >
      {children}
    </button>
  );
}

export default LoginButton;
