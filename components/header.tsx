import Image from "next/image";
import { useEffect } from "react";
import { useTheme } from "next-themes";

interface HeaderProps {
  onToggleDarkMode: (isDarkMode: boolean) => void;
  darkMode: boolean;
}

const darkIcon = "icons_header/moon.svg";
const lightIcon = "icons_header/sun.svg";

export default function Header({ onToggleDarkMode, darkMode }: HeaderProps) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(darkMode ? "dark" : "light");
    
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, setTheme]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleClick = () => {
    onToggleDarkMode(!darkMode);
  };

  return (
    <section className="sticky top-0 z-10">
      <header className="flex justify-end items-center py-3 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
        <div className="hover:opacity-80 dark:hover:opacity-90 transition-all">
          <Image
            style={{ cursor: "pointer" }}
            src={darkMode ? darkIcon : lightIcon}
            width="30"
            height="30"
            alt="Icons"
            onClick={handleClick}
          />
        </div>
      </header>
    </section>
  );
}
