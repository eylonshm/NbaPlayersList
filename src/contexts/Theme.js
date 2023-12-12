import React, { createContext, useContext, useState } from "react";
import { theme as themeConstants } from "../constants";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themeConstants.LIGHT);

  const themeSwitch = () => {
    setTheme((prevTheme) => {
      if (prevTheme === themeConstants.LIGHT) return themeConstants.DARK;
      return themeConstants.LIGHT;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeSwitch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
