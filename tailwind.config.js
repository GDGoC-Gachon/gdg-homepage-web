/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        test: 'red', // border 테스트용
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
    },
  },
  plugins: [],
};
