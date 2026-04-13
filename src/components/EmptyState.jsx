import { Globe, Sparkles, ArrowRight } from "lucide-react";

const SUGGESTIONS = [
  { name: "torvalds", desc: "Creator of Linux" },
  { name: "gaearon", desc: "React core team" },
  { name: "yyx990803", desc: "Creator of Vue.js" },
  { name: "sindresorhus", desc: "Open source wizard" },
];

export default function EmptyState({ darkMode, onSearch }) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 rounded-2xl border border-dashed transition-colors duration-300 ${
        darkMode
          ? "border-surface-border bg-surface-card/50"
          : "border-light-border bg-light-elevated/50"
      }`}
    >
      {/* Icon */}
      <div
        className={`relative p-5 rounded-2xl mb-6 transition-colors duration-300 ${
          darkMode ? "bg-surface-hover" : "bg-white shadow-sm"
        }`}
      >
        {/* REPLACED Github → Globe */}
        <Globe
          className={`w-12 h-12 transition-colors duration-300 ${
            darkMode ? "text-ink-muted" : "text-light-muted"
          }`}
        />

        <div
          className={`absolute -top-1 -right-1 p-1.5 rounded-lg transition-colors duration-300 ${
            darkMode ? "bg-brand/20 text-brand" : "bg-blue-100 text-blue-600"
          }`}
        >
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Text */}
      <h3
        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
          darkMode ? "text-ink" : "text-light-ink"
        }`}
      >
        Ready to explore?
      </h3>

      <p
        className={`text-sm text-center max-w-sm mb-8 transition-colors duration-300 ${
          darkMode ? "text-ink-muted" : "text-light-muted"
        }`}
      >
        Enter a GitHub username above to discover their profile, repositories,
        and contributions.
      </p>

      {/* Suggestions */}
      <div className="w-full max-w-md">
        <p
          className={`text-xs font-medium uppercase tracking-wider text-center mb-3 transition-colors duration-300 ${
            darkMode ? "text-ink-faint" : "text-light-muted"
          }`}
        >
          Try these popular developers
        </p>

        <div className="grid grid-cols-2 gap-2">
          {SUGGESTIONS.map((user) => (
            <button
              key={user.name}
              onClick={() => onSearch(user.name)}
              className={`group flex items-center justify-between gap-2 p-3 rounded-xl border text-left transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? "bg-surface-card border-surface-border hover:border-brand/30 hover:bg-surface-hover"
                  : "bg-white border-light-border hover:border-blue-200 hover:shadow-sm"
              }`}
            >
              <div className="min-w-0">
                <p
                  className={`font-semibold text-sm truncate transition-colors duration-300 ${
                    darkMode ? "text-brand" : "text-blue-600"
                  }`}
                >
                  {user.name}
                </p>

                <p
                  className={`text-xs truncate transition-colors duration-300 ${
                    darkMode ? "text-ink-muted" : "text-light-muted"
                  }`}
                >
                  {user.desc}
                </p>
              </div>

              <ArrowRight
                className={`w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 ${
                  darkMode ? "text-ink-muted" : "text-light-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}