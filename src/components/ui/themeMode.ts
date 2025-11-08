import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// 1️⃣ Tipo del contexto
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// 2️⃣ Creación del contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3️⃣ Props del proveedor
interface ThemeProviderProps {
  children: ReactNode;
}

// 4️⃣ Proveedor del tema (sin JSX)
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      return nextTheme;
    });
  };

  // 👉 Aquí en lugar de JSX usamos React.createElement
  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, toggleTheme } },
    children
  );
}

// 5️⃣ Hook para consumir el contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
}
