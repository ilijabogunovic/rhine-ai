import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * The lab's colour versions, from the logo kit, and the light/dark mode.
 * Each colour sets the site accent, the mark's colours and the home header illustration.
 * The colour values themselves live in index.css under [data-theme] and [data-mode].
 */
export const THEMES = [
  { id: "carmine", label: "Carmine", accent: "#960018", light: "#e3cdc0", header: "rhine-ai-header-red" },
  { id: "blue", label: "Blue", accent: "#1d3a8a", light: "#c9d4ea", header: "rhine-ai-header-blue" },
  { id: "green", label: "Green", accent: "#1e5c3a", light: "#cfddcb", header: "rhine-ai-header-green" },
  { id: "orange", label: "Orange", accent: "#c2410c", light: "#f0d4c0", header: "rhine-ai-header-orange" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];
/** "auto" follows the device's light or dark setting. */
export type Mode = "light" | "dark" | "auto";

const THEME_KEY = "rhine-theme";
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

const isThemeId = (v: string | null): v is ThemeId => THEMES.some((t) => t.id === v);
const isMode = (v: string | null): v is Mode => v === "light" || v === "dark" || v === "auto";

/**
 * Browsers ignore a changed href on an existing icon link, so the icon links are replaced.
 * The SVG serves modern browsers; the PNG serves Safari and home-screen icons.
 */
const setFavicon = (theme: ThemeId) => {
  document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach((l) => l.remove());
  const base = import.meta.env.BASE_URL;
  const add = (rel: string, href: string, type?: string) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (type) link.type = type;
    document.head.appendChild(link);
  };
  add("icon", `${base}icons/mark-${theme}.svg`, "image/svg+xml");
  add("icon", `${base}icons/mark-${theme}.png`, "image/png");
  add("apple-touch-icon", `${base}icons/mark-${theme}.png`);
};

interface ThemeState {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  mode: Mode;
  setMode: (m: Mode) => void;
  /** The mode actually shown, once "auto" is resolved. */
  dark: boolean;
}

const ThemeContext = createContext<ThemeState>({
  theme: "carmine",
  setTheme: () => {},
  mode: "auto",
  setMode: () => {},
  dark: false,
});

const prefersDark = () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    const v = read(THEME_KEY);
    return isThemeId(v) ? v : "carmine";
  });
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
    root.dataset.theme = theme;
    root.dataset.mode = dark ? "dark" : "light";
    root.style.colorScheme = dark ? "dark" : "light";
    setFavicon(theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#161413" : "#f7f5f1");
  }, [theme, dark]);

  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    write(THEME_KEY, t);
  }, []);
  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    write(MODE_KEY, m);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode, dark }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
