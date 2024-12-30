/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "22px",
      "2xl": "26px",
    },

    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },

    extend: {
      inset: {
        "9px": "9px",
        "20px": "20px",
        "99px": "99px",
        "103px": "103px",
        "150px": "150px",
        "375px": "375px",
        "455px": "455px",
        "559px": "559px",
        "652px": "652px",
        "855px": "855px",
        "1255px": "1255px",
        "1884px": "1884px",
      },

      width: {
        "6px": "6px",
        "10px": "10px",
        "30px": "30px",
        "39px": "39px",
        "190px": "190px",
        "270px": "270px",
        "310px": "310px",
        "370px": "370px",
        "450px": "450px",
      },
      height: {
        "3px": "3px",
        "10px": "10px",
        "30px": "30px",
        "40px": "40px",
        "46px": "46px",
        "39px": "39px",
        "223px": "223px",
        "280px": "280px",
        "312px": "312px",
      },
      borderRadius: {
        '21px': "21px",
        "10px": "10px",
        "5px": "5px",
      },
      borderWidth: {
        1.6: "1.6px",
      },

      boxShadow: {
        header: "0px 2px 4px rgba(0, 63, 143, 0.1)",
        shadowInput: `0px 3px 20px #062D5E1A`,
        shadowImage: `box-shadow: 0px 20px 50px #062D5E0F`,
        shadowMenu: `box-shadow: 0px 20px 50px #062D5E1F`,
      },

      container: {
        center: true,
      },
      backgroundImage: {
        hero: "url('/src/img/Images/Inspiracje_plastyczne.png')",
      },

      colors: {
        white: "#ffffff",
        gray: "#F9FAFC",
        textBlack: "#202020",
        textGray: "#919191",
        textGrayLight: "#585656",
        orange: "#FFF1E6",
        customGray: "#E5E7EB",
        grayLink: "#686868",
        hoverGrayLink:"#F4F5F8",
        lightBlue:" #dbeafe",
        
      },
    },
  },
  plugins: [],
};
