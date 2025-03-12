function JoinButton({ children, color, font_color }: { children: React.ReactNode; color: string; font_color: string }) {
  return (
    <button
      style={{ backgroundColor: color, color: font_color, transition: 'background-color 0.3s ease' }}
      className="w-full max-w-[37rem] p-[1.25rem] rounded-[50px] font-bold font-googleSansDisplay shadow-xl shadow-gray-300 transition-all"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#e4e4e4';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
    >
      {children}
    </button>
  );
}

export default JoinButton;
