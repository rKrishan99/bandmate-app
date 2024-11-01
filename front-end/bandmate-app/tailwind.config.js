/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
      colors: {
        primaryButton: {
          DEFAULT: '#ed8d07', 
          hover: '#c7620a',  
        },
        navItem: {
          DEFAULT: '#f7f6f2', 
          hover: '#e69c09', 
          active: '#ed8d07', 
        },
        accent: {
          DEFAULT: '#f5f3ed',
        },
        background: '#ECECEC',
        text: '#f7f6f2',
        cardBg: '#ffffff',
      },
      spacing: {
        cusPadding: '150px',
      },
    },
  },
  plugins: [],
}