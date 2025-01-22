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
      },
      height: {
        // 헤더 높이
        header: '4.125rem',
        // 헤더 높이를 제외한 화면 높이
        'screen-without-header': 'calc(100vh - 4.125rem)',
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
