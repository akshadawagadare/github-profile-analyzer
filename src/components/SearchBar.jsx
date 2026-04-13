import { useState, useRef, useEffect } from 'react'
import { Search, Loader2, ArrowRight } from 'lucide-react'

export default function SearchBar({ onSearch, darkMode, loading }) {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      onSearch(value)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      inputRef.current?.blur()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`relative flex items-center rounded-2xl transition-all duration-300 ${
        isFocused
          ? darkMode
            ? 'ring-2 ring-brand/30 shadow-glow'
            : 'ring-2 ring-blue-500/30 shadow-lg'
          : ''
      }`}>
        {/* Search icon */}
        <div className={`absolute left-5 flex items-center pointer-events-none transition-colors duration-300 ${
          isFocused
            ? darkMode ? 'text-brand' : 'text-blue-600'
            : darkMode ? 'text-ink-faint' : 'text-light-muted'
        }`}>
          <Search className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Search GitHub username..."
          aria-label="Search GitHub username"
          disabled={loading}
          autoComplete="off"
          spellCheck="false"
          className={`w-full pl-14 pr-36 py-4 rounded-2xl text-base font-medium border-2 outline-none transition-all duration-300 ${
            darkMode
              ? 'bg-surface-card border-surface-border text-ink placeholder-ink-faint focus:border-brand/50'
              : 'bg-white border-light-border text-light-ink placeholder-light-muted focus:border-blue-500/50'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading || !value.trim()}
          className={`absolute right-2 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
            darkMode
              ? 'bg-accent hover:bg-accent-hover text-white shadow-glow-accent disabled:opacity-40 disabled:shadow-none'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg disabled:opacity-40 disabled:shadow-none'
          } disabled:cursor-not-allowed transform active:scale-95`}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Searching</span>
            </>
          ) : (
            <>
              <span>Search</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Helper text */}
      <p className={`mt-3 text-center text-xs transition-colors duration-300 ${
        darkMode ? 'text-ink-faint' : 'text-light-muted'
      }`}>
        Press <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold mx-0.5 ${
          darkMode ? 'bg-surface-card text-ink-muted border border-surface-border' : 'bg-light-elevated text-light-muted border border-light-border'
        }`}>Enter</kbd> to search or use <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold mx-0.5 ${
          darkMode ? 'bg-surface-card text-ink-muted border border-surface-border' : 'bg-light-elevated text-light-muted border border-light-border'
        }`}>Cmd+K</kbd> to focus
      </p>
    </form>
  )
}
