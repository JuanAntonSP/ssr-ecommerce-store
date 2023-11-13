"use client";
import { ReactNode, createContext } from "react";
const ThemeContext = createContext("");

interface IThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: IThemeProviderProps) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
