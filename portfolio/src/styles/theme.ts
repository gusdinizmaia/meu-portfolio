import { css } from "styled-components";

export const theme = {
  colors: {
    first: {
      main: "#023047",
      contrast: "#1b4459",
    },
    second: {
      main: "#FB8500",
      contrast: "#fb9119",
    },
    third: {
      main: "#FFB703",
      contrast: "#ffbe1c",
    },
    fourth: {
      main: "#219EBC",
      contrast: "#37a7c2",
    },
    fifth: {
      main: "#8ECAE6",
      contrast: "#99cfe8",
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

  fonts: {
    title: {
      one: "700 42px Montserrat, sans-serif",
      two: "600 30px Montserrat, sans-serif",
      three: "600 24px Montserrat, sans-serif",
    },
    text: {
      one: "500 18px/1.5 Montserrat, sans-serif",
      two: "500 16px/1.5 Montserrat, sans-serif",
      three: "500 14px/1.5 Montserrat, sans-serif",
    },
  },
};

export const ButtonStyle = (name: string) => {
  const button = (bg: string, bgHover: string, color?: string) => css`
    font: ${theme.fonts.text.two};
    font-weight: 600;
    padding: 6px 8px;
    border-radius: ${theme.border.radius.two};
    cursor: pointer;
    color: ${color ? color : theme.colors.grey.five};
    background-color: ${bg};
    transition: 0.25s;

    :hover {
      background-color: ${bgHover};
      color: ${color ? color : theme.colors.grey.five};
    }
  `;

  switch (name) {
    case "first":
      return button(theme.colors.first.main, theme.colors.first.contrast);
    case "second":
      return button(theme.colors.second.main, theme.colors.second.contrast);
    case "third":
      return button(
        theme.colors.third.main,
        theme.colors.third.contrast,
        theme.colors.grey.two
      );
    case "fourth":
      return button(theme.colors.fourth.main, theme.colors.fourth.contrast);
    case "fifth":
      return button(theme.colors.fifth.main, theme.colors.fifth.contrast);
    case "grey5":
      return button(
        theme.colors.grey.five,
        theme.colors.grey.four,
        theme.colors.grey.two
      );
    case "grey2":
      return button(theme.colors.grey.two, theme.colors.grey.three);
  }
};

export const themeInvert = {};
