export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans serif"],
      },
      colors: {
        darkBackground: "#252B42",
        secondTextcolor: "#737373",
        hoverTextcolor: "#2A7CC7",
        textColor: "#252B42",
        buttonPrimarycolor: "#23A6F0",
        heroBonus: "#977DF4",
        heroLeftcolor: "#96E9FB",
        heroRightcolor: "#ABECD6",
        footerColor: "#737373",
        priceGray: "#BDBDBD",
        priceGreen: "#23856D",
        priceOrange: "#E77C40",
        starYellow: "#FFCE31",
        errorColor: "E74040",
      },
    },
  },
  plugins: [],
};
