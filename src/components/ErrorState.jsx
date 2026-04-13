import { AlertCircle, RefreshCw, SearchX } from 'lucide-react'

export default function ErrorState({ message, darkMode, onRetry }) {
  const isNotFound = message?.toLowerCase().includes('not found')
  const Icon = isNotFound ? SearchX : AlertCircle

  return (
    <div className={`flex flex-col items-center justify-center py-12 px-6 rounded-2xl border transition-colors duration-300 animate-fade-in ${
      darkMode
        ? 'bg-danger/5 border-danger/20'
        : 'bg-red-50 border-red-200'
    }`}>
      {/* Icon */}
      <div className={`p-4 rounded-2xl mb-5 ${
        darkMode ? 'bg-danger/10' : 'bg-red-100'
      }`}>
        <Icon className={`w-8 h-8 ${
          darkMode ? 'text-danger' : 'text-red-600'
        }`} />
      </div>

      {/* Text */}
      <h3 className={`text-lg font-bold mb-2 ${
        darkMode ? 'text-danger' : 'text-red-700'
      }`}>
        {isNotFound ? 'User Not Found' : 'Something went wrong'}
      </h3>
      <p className={`text-sm text-center max-w-sm mb-6 ${
        darkMode ? 'text-ink-muted' : 'text-red-600/80'
      }`}>
        {message}
      </p>

      {/* Retry button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            darkMode
              ? 'bg-surface-card hover:bg-surface-hover text-ink border border-surface-border'
              : 'bg-white hover:bg-light-hover text-light-ink border border-light-border shadow-sm'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  )
}
