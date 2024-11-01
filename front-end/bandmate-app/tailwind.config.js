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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        /* Firefox-specific styling for hiding scrollbars */
        ".scrollbar-hidden": {
          scrollbarWidth: "none", // Hides scrollbar in Firefox
          "-ms-overflow-style": "none", // Hides scrollbar in IE and Edge
        },
        /* Chrome/Safari/WebKit styling for hiding scrollbars */
        ".scrollbar-webkit-hidden": {
          "&::-webkit-scrollbar": {
            display: "none", // Hides scrollbar in Chrome, Safari, and other WebKit browsers
          },
        },
      };
    
      addUtilities(newUtilities, ["responsive", "hover"]);
    }
    
    

  ],
}