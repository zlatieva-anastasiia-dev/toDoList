import { useContext } from "react";
import { Button } from "../../components";
import { ThemeContext } from "./providers/ThemeProvider";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export function ThemeSwitcher() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeSwitcher needs ThemeProvider");
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log({ theme });

  return (
    <div className="flex justify-end">
      <Button
        onClick={toggleTheme}
        className="px-1 py-1 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-lg flex items-center"
      >
        {theme === "dark" ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}
