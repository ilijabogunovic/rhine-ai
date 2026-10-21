import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Light or dark mode. "auto" follows the device's setting.
 * The colour values themselves live in index.css under [data-mode].
 */
export type Mode = "light" | "dark" | "auto";

const MODE_KEY = "rhine-mode";

const read = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode: the choice lasts for this visit only */
  }
};

const isMode = (v: string | null): v is Mode => v === "light" || v === "dark" || v === "auto";

interface ThemeState {
  mode: Mode;
  setMode: (m: Mode) => void;
  /** The mode actually shown, once "auto" is resolved. */
  dark: boolean;
}

const ThemeContext = createContext<ThemeState>({
  mode: "auto",
  setMode: () => {},
  dark: false,
});

const prefersDark = () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<Mode>(() => {
    const v = read(MODE_KEY);
    return isMode(v) ? v : "auto";
  });
  const [systemDark, setSystemDark] = useState(prefersDark);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = () => setSystemDark(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const dark = mode === "dark" || (mode === "auto" && systemDark);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.mode = dark ? "dark" : "light";
    root.style.colorScheme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#161413" : "#f7f5f1");
  }, [dark]);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    write(MODE_KEY, m);
  }, []);

  return <ThemeContext.Provider value={{ mode, setMode, dark }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
