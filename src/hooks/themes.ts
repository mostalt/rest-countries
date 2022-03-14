import { useState } from "react";

import { THEMES, themeName } from "../services/theme";

export const useTheme = (): [themeName, () => void] => {
  const [themeName, setTheme] = useState(THEMES.LIGHT);

  const themeHandler = () => {
    if (themeName === THEMES.LIGHT) {
      setTheme(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
    }
  };

  return [themeName, themeHandler];
};
