/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainWhite: "#F1F3F4",
        mainRed: '#EA4335',
        mainBlue: '#4285F4',
        black: {
          100: '#828282',
          800: '#101828',
          900: '#090909',
        },
      },
      fontFamily: {
        productSans: ["ProductSans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        googleSansDisplay: ["GoogleSansDisplay", "sans-serif"],
      },
      backgroundImage: {
        'mainBg': "url('/src/shared/assets/images/main/mainBackground.png')",
        'mainDot': "url('/src/shared/assets/images/main/dot.png')",
        'mainSquarePattern': "url('/src/shared/assets/images/main/squarePattern.png')",
        'mainMiniSquare': "url('/src/shared/assets/images/main/miniSquare.png')",
      },
      backgroundSize: {
        'full-width': '100% auto',
      },
      height: {
        // 헤더 높이
        header: '4.125rem',
        // 헤더 높이를 제외한 화면 높이
        'screen-without-header': 'calc(100vh - 4.125rem)',
      },
      keyframes: {
        // fadeInOut 애니메이션 정의
        fadeInOut: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        // fadeInOut 애니메이션 설정
        fadeInOut: 'fadeInOut 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
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
    },
  ]
};
