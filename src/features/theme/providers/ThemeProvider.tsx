import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};
export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") as "light" | "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
