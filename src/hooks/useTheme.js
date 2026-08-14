import { useEffect, useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  // Sync this instance when another component toggles the theme
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const toggle = (value) => {
    const next = typeof value === "boolean" ? value : !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    // MutationObserver will update all instances automatically
  };

  return [isDark, toggle];
}
