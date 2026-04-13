import { Sun, Moon, Command, Globe } from "lucide-react";

export default function Navbar({ darkMode, onToggleDark }) {
  return (
    <nav
      className={`sticky top-0 z-50 border-b glass transition-all duration-300 ${
        darkMode
          ? "bg-surface/80 border-surface-border"
          : "bg-white/80 border-light-border"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div
            className={`p-2 rounded-xl transition-all duration-300 ${
              darkMode
                ? "bg-surface-card group-hover:bg-surface-hover"
                : "bg-light-elevated group-hover:bg-light-hover"
            }`}
          >
            {/* Replaced GitHub icon with Globe (safe lucide icon) */}
            <Globe
              className={`w-5 h-5 transition-colors duration-300 ${
                darkMode ? "text-brand" : "text-blue-600"
              }`}
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-sm font-bold tracking-tight transition-colors duration-300 ${
                darkMode ? "text-ink" : "text-light-ink"
              }`}
            >
              GitAnalyzer
            </span>

            <span
              className={`text-[10px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                darkMode ? "text-ink-faint" : "text-light-muted"
              }`}
            >
              Profile Explorer
            </span>
          </div>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2">
          
          {/* Keyboard hint */}
          <div
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-300 ${
              darkMode
                ? "bg-surface-card text-ink-muted border border-surface-border"
                : "bg-light-elevated text-light-muted border border-light-border"
            }`}
          >
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={onToggleDark}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`relative p-2.5 rounded-xl transition-all duration-300 ${
              darkMode
                ? "bg-surface-card hover:bg-surface-hover border border-surface-border text-ink-muted hover:text-ink"
                : "bg-light-elevated hover:bg-light-hover border border-light-border text-light-muted hover:text-light-ink"
            }`}
          >
            <div className="relative w-5 h-5">
              <Sun
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                  darkMode ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              />

              <Moon
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                  darkMode ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}