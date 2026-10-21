import { useEffect, useId, useRef, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme, type Mode } from "@/lib/theme";

const MODES: { id: Mode; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "auto", label: "Auto", icon: SunMoon },
];

/** A button in the top bar that switches between light, dark and the device's setting. */
const ModePicker = () => {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const Current = MODES.find((m) => m.id === mode)!.icon;

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

  return (
    <div ref={wrapper} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Choose light or dark mode"
        className="group grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2 hover:text-carmine"
      >
        <Current
          key={mode}
          aria-hidden="true"
          strokeWidth={1.75}
          className="mode-icon h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-12"
        />
      </button>

      {open && (
        <div
          id={panelId}
          className="mode-panel absolute right-0 top-full z-50 mt-2 w-[17rem] rounded-2xl bg-paper p-3 text-ink shadow-[0_18px_40px_-12px_rgb(0_0_0/0.28)]"
        >
          <div role="radiogroup" aria-label="Mode" className="grid grid-cols-3 gap-1 rounded-full bg-paper-2 p-1">
            {MODES.map((m) => {
              const active = m.id === mode;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setMode(m.id)}
                  className={`flex items-center justify-center gap-1.5 rounded-full py-2 text-sm font-medium transition-colors ${
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

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .mode-icon { animation: mode-icon-in 360ms var(--ease-out) both; }
          @keyframes mode-icon-in { from { opacity: 0; transform: rotate(-60deg) scale(0.6); } }
          .mode-panel { animation: mode-panel-in 220ms var(--ease-out) both; transform-origin: top right; }
          @keyframes mode-panel-in { from { opacity: 0; transform: translateY(-6px) scale(0.98); } }
        }
      `}</style>
    </div>
  );
};

export default ModePicker;
