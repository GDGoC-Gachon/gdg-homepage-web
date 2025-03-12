/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainWhite: '#F1F3F4',
        mainRed: '#EA4335',
        mainBlue: '#4285F4',
        black: {
          100: '#828282',
          800: '#101828',
          900: '#090909',
        },
      },
      fontFamily: {
        productSans: ['ProductSans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        googleSansDisplay: ['GoogleSansDisplay', 'sans-serif'],
      },
      backgroundImage: {
        mainBg: "url('/src/shared/assets/images/main/mainBackground.png')",
        mainDot: "url('/src/shared/assets/images/main/dot.png')",
        mainSquarePattern: "url('/src/shared/assets/images/main/squarePattern.png')",
        mainMiniSquare: "url('/src/shared/assets/images/main/miniSquare.png')",
        joinBg: "url('/src/shared/assets/images/join/joinBackground.png')",
      },
      backgroundSize: {
        'full-width': '100% auto',
      },
      height: {
        // 헤더 높이
        header: '4.125rem',
        // 홈화면 섹션 화면 높이
        'main-section': 'calc(100vh + 4.125rem)',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(10px)' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // 레이아웃 관련 유틸리티
      addUtilities({
        // 레이아웃 범위 테스트용
        '.border-test': {
          border: '1px solid red',
        },
        // 자식요소 중앙정렬
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
      });

      // Hover 관련 유틸리티
      addUtilities({
        // Hover 시 위로 올라가는 효과
        '.hover-up': {
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease',
        },
        '.hover-up:hover': {
          transform: 'translateY(-0.8rem)',
        },
        // Hover 시 위로 이동하며 그림자 추가 효과
        '.hover-up-shadow': {
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          'box-shadow': '0 5px 8px rgba(0, 0, 0, 0.1)',
        },
        '.hover-up-shadow:hover': {
          transform: 'translateY(-10px)',
          'box-shadow': '0 8px 15px rgba(0, 0, 0, 0.2)',
        },
      });

      // 텍스트 말줄임 관련 유틸리티
      addUtilities({
        // 한 줄일 경우
        '.text-ellipsis-1': {
          overflow: 'hidden',
          'white-space': 'nowrap',
          'text-overflow': 'ellipsis',
          'word-break': 'break-all',
        },
        // 두 줄일 경우
        '.text-ellipsis-2': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        },
      });

      // 밑줄 애니메이션 유틸리티
      addUtilities({
        '.btn-underline': {
          position: 'relative',
          '&::after': {
            content: "''",
            position: 'absolute',
            left: '0',
            bottom: '-0.5px',
            width: '100%',
            height: '1.8px',
            backgroundColor: '#EA4335',
            transform: 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.2s ease-in-out',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          },
        },
      });
    },
  ],
};
