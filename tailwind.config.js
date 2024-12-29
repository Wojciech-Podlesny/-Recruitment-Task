/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontSize: {
      base:"16px",
      xl:"20px",
      lg: "22px",
      "2xl": "26px",
    },

    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },

    extend: {
      width: {
        '6px': '6px',
        '190px':'190px',
      },
      height: {
        '3px': '3px',
      },
      borderRadius: {
        custom: '21px',
      },
      borderWidth: {
        '1.6': '1.6px',
      },
      backgroundImage: {
        'arrow': "url('/src/img/icons/Arrow.svg')",
      },
      boxShadow: {
        custom: '0px 2px 4px rgba(0, 63, 143, 0.1)',
        shadowInput:`0px 3px 20px #062D5E1A`,
        shadowImage:`box-shadow: 0px 20px 50px #062D5E0F`
      },

      container: {
        center: true,
      },
      backgroundImage: {
        hero: "url('/src/img/Inspiracje_plastyczne.png')",
      },

      colors: {
        white: "#ffffff",
        gray:"#F9FAFC",
        textBlack:"#202020",
        textGray:"#919191",
        textGrayLight:"#585656",
        orange:"#FFF1E6",
        customGray:"#E5E7EB",
        
      },
    },
  },
  plugins: [],
};