export const theme = {
  colors: {
    first: {
      main: "#023047",
    },
    second: {
      main: "#FB8500",
    },
    third: {
      main: "#FFB703",
    },
    fourth: {
      main: "#219EBC",
    },
    fifth: {
      main: "#8ECAE6",
    },
    grey: {
      one: "#212529",
      two: "#495057",
      three: "#adb5bd",
      four: "#dee2e6",
      five: "#f1f3f5",
    },
    fixed: {
      white: "#ffffff",
      black: "#000000",
    },
  },

  border: {
    radius: {
      one: "16px",
      two: "10px",
      three: "6px",
    },
    shadows: {
      one: "",
    },
  },

  // Montserrat, sans-serif
  // Bebas Neue, cursive
  // Roboto Mono, monospace

  fonts: {
    title: {
      one: "700 32px Montserrat, sans-serif",
      two: "600 28px Montserrat, sans-serif",
      three: "600 24px Montserrat, sans-serif",
    },
    text: {
      one: "600 18px Montserrat, sans-serif",
      two: "500 16px Montserrat, sans-serif",
      three: "400 12px Montserrat, sans-serif",
    },
  },
};

export const ButtonStyle = (background: string, color: string) => {
  return `color: ${color};
  background-color: ${background};
  font: ${theme.fonts.text.two};
  padding: 6px 8px;
  border-radius: ${theme.border.radius.two};
  cursor: pointer;`;
};

export const themeInvert = {};
