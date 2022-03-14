import React from "react";

export type themeName = "light" | "dark";

export const THEMES: { [key: string]: themeName } = {
  LIGHT: "light",
  DARK: "dark",
};

export type Theme = {
  background: string;
  textColor: string;
  elementColor: string;
  inputColor: string;
};

export const lightTheme: Theme = {
  background: "hsl(0, 0%, 98%)",
  textColor: "hsl(200, 15%, 8%)",
  elementColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(0, 0%, 52%)",
};

export const darkTheme: Theme = {
  background: "hsl(207, 26%, 17%)",
  textColor: "hsl(0, 0%, 100%)",
  elementColor: "hsl(209, 23%, 22%)",
  inputColor: "hsl(0, 0%, 100%)",
};

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const selectTheme = (theme: themeName) =>
  theme === "light" ? lightTheme : darkTheme;
