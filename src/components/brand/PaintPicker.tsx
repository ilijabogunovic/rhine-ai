import { useEffect, useId, useRef, useState } from "react";
import { Moon, Paintbrush, Sun, SunMoon } from "lucide-react";
import { Mark } from "@/components/brand/Motif";
import { THEMES, useTheme, type Mode, type ThemeId } from "@/lib/theme";

const MODES: { id: Mode; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "auto", label: "Auto", icon: SunMoon },
];

/**
 * A brush in the top bar. It opens a small panel to repaint the site in one of the
 * colour versions of the mark, and to switch between light and dark.
 */
const PaintPicker = () => {
  const { theme, setTheme, mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [sweep, setSweep] = useState<{ key: number; color: string } | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const paint = (id: ThemeId) => {
    if (id === theme) return;
    const t = THEMES.find((x) => x.id === id)!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setSweep({ key: Date.now(), color: t.accent });
    // Repaint once the stroke covers the screen
    window.setTimeout(() => setTheme(id), reduced ? 0 : 380);
  };

  return (
    <div ref={wrapper} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Change the lab's colour and light or dark mode"
        className="group grid h-10 w-10 place-items-center text-ink transition-colors hover:text-carmine"
      >
        <Paintbrush
          strokeWidth={1.75}
          className={`h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-12 ${open ? "-rotate-45" : ""}`}
        />
        <span aria-hidden="true" className="absolute bottom-1.5 right-1.5 h-2 w-2 rounded-full bg-carmine" />
      </button>

      {open && (
        <div
          id={panelId}
          className="paint-panel absolute right-0 top-full z-50 mt-2 w-[19rem] bg-paper p-5 text-ink shadow-[0_18px_40px_-12px_rgb(0_0_0/0.28)]"
        >
          <p className="t-1 font-semibold" id={`${panelId}-colour`}>
            Lab colour
          </p>
          <div role="radiogroup" aria-labelledby={`${panelId}-colour`} className="mt-3 grid grid-cols-4 gap-2">
            {THEMES.map((t) => {
              const active = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => paint(t.id)}
                  className={`group flex flex-col items-center gap-1.5 py-2 transition-colors ${active ? "bg-paper-2" : "hover:bg-paper-2"}`}
                >
                  <Mark
                    className={`h-9 w-9 transition-transform duration-300 ease-out group-hover:-rotate-6 ${active ? "scale-110" : ""}`}
                    fills={{ west: t.light, east: t.light, river: t.accent }}
                    title=""
                  />
                  <span className={`text-sm ${active ? "font-semibold" : "text-ink-soft"}`}>{t.label}</span>
                </button>
              );
            })}
          </div>

          <p className="t-1 mt-5 font-semibold" id={`${panelId}-mode`}>
            Mode
          </p>
          <div role="radiogroup" aria-labelledby={`${panelId}-mode`} className="mt-3 grid grid-cols-3 gap-1 bg-paper-2 p-1">
            {MODES.map((m) => {
              const active = m.id === mode;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setMode(m.id)}
                  className={`flex items-center justify-center gap-1.5 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-carmine text-paper" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <m.icon aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {sweep && (
        <div
          key={sweep.key}
          aria-hidden="true"
          className="paint-sweep pointer-events-none fixed inset-0 z-[70]"
          style={{ background: sweep.color }}
          onAnimationEnd={() => setSweep(null)}
        />
      )}
      <style>{`
        .paint-sweep { animation: paint-sweep 900ms cubic-bezier(0.76, 0, 0.24, 1) forwards; }
        @keyframes paint-sweep {
          0% { clip-path: polygon(0 0, 0 0, -20% 100%, -20% 100%); }
          42% { clip-path: polygon(0 0, 120% 0, 100% 100%, -20% 100%); opacity: 1; }
          100% { clip-path: polygon(0 0, 120% 0, 100% 100%, -20% 100%); opacity: 0; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .paint-panel { animation: paint-panel-in 220ms var(--ease-out) both; transform-origin: top right; }
          @keyframes paint-panel-in { from { opacity: 0; transform: translateY(-6px) scale(0.98); } }
        }
      `}</style>
    </div>
  );
};

export default PaintPicker;
