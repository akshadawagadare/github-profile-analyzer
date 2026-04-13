import { Star, GitFork, Clock, BookOpen, ExternalLink, Code2 } from 'lucide-react'

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Shell: '#89e051',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  Dart: '#00B4AB',
  Lua: '#000080',
  Elixir: '#6e4a7e',
  Haskell: '#5e5086',
  Scala: '#c22d40',
  Clojure: '#db5855',
  Zig: '#ec915c',
}

function getRelativeTime(dateString) {
  const now = new Date()
  const date = new Date(dateString)
  const diff = Math.floor((now - date) / 1000)

  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`
  if (diff < 2592000) return `${Math.floor(diff / 604800)}w ago`
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`
  return `${Math.floor(diff / 31536000)}y ago`
}

function RepoCard({ repo, darkMode, index }) {
  const langColor = LANG_COLORS[repo.language] || '#8b949e'

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: `${index * 50}ms` }}
      className={`group relative flex flex-col gap-3 p-5 rounded-xl border transition-all duration-300 animate-fade-in hover:-translate-y-1 ${
        darkMode
          ? 'bg-surface-card border-surface-border hover:border-brand/30 hover:shadow-card-hover'
          : 'bg-white border-light-border hover:border-blue-200 hover:shadow-card-light-hover'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${
            darkMode ? 'text-brand' : 'text-blue-600'
          }`} />
          <h4 className={`font-semibold truncate transition-colors duration-300 ${
            darkMode ? 'text-ink group-hover:text-brand' : 'text-light-ink group-hover:text-blue-600'
          }`}>
            {repo.name}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {repo.fork && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded-md border font-medium ${
              darkMode 
                ? 'text-ink-muted border-surface-border bg-surface' 
                : 'text-light-muted border-light-border bg-light-elevated'
            }`}>
              Fork
            </span>
          )}
          <ExternalLink className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 ${
            darkMode ? 'text-ink-muted' : 'text-light-muted'
          }`} />
        </div>
      </div>

      {/* Description */}
      {repo.description ? (
        <p className={`text-sm leading-relaxed line-clamp-2 transition-colors duration-300 ${
          darkMode ? 'text-ink-muted' : 'text-light-muted'
        }`}>
          {repo.description}
        </p>
      ) : (
        <p className={`text-sm italic transition-colors duration-300 ${
          darkMode ? 'text-ink-faint' : 'text-light-muted/60'
        }`}>
          No description provided
        </p>
      )}

      {/* Footer */}
      <div className={`flex items-center flex-wrap gap-3 pt-1 mt-auto text-xs transition-colors duration-300 ${
        darkMode ? 'text-ink-muted' : 'text-light-muted'
      }`}>
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-offset-1"
              style={{ 
                backgroundColor: langColor,
                ringColor: `${langColor}40`,
                ringOffsetColor: darkMode ? '#161b22' : '#ffffff'
              }}
            />
            <span className="font-medium">{repo.language}</span>
          </span>
        )}
        
        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors duration-300 ${
          repo.stargazers_count > 0 
            ? darkMode ? 'bg-warning/10 text-warning' : 'bg-amber-50 text-amber-700'
            : ''
        }`}>
          <Star className={`w-3.5 h-3.5 ${repo.stargazers_count > 0 ? '' : ''}`} />
          <span className="font-medium tabular-nums">
            {repo.stargazers_count >= 1000
              ? `${(repo.stargazers_count / 1000).toFixed(1)}k`
              : repo.stargazers_count}
          </span>
        </span>
        
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <GitFork className="w-3.5 h-3.5" />
            <span className="font-medium tabular-nums">{repo.forks_count}</span>
          </span>
        )}
        
        <span className="flex items-center gap-1 ml-auto">
          <Clock className="w-3.5 h-3.5" />
          <span>{getRelativeTime(repo.updated_at)}</span>
        </span>
      </div>
    </a>
  )
}

export default function RepoList({ repos, darkMode }) {
  if (!repos || repos.length === 0) {
    return (
      <div className={`rounded-2xl border p-12 text-center transition-colors duration-300 ${
        darkMode ? 'bg-surface-card border-surface-border' : 'bg-white border-light-border'
      }`}>
        <div className={`inline-flex p-4 rounded-full mb-4 ${
          darkMode ? 'bg-surface-hover' : 'bg-light-elevated'
        }`}>
          <Code2 className={`w-8 h-8 ${darkMode ? 'text-ink-faint' : 'text-light-muted'}`} />
        </div>
        <p className={`font-semibold ${darkMode ? 'text-ink' : 'text-light-ink'}`}>
          No repositories yet
        </p>
        <p className={`text-sm mt-1 ${darkMode ? 'text-ink-muted' : 'text-light-muted'}`}>
          This user hasn&apos;t created any public repositories.
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
      darkMode ? 'bg-surface-card border-surface-border shadow-card' : 'bg-white border-light-border shadow-card-light'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className={`text-lg font-semibold flex items-center gap-2.5 ${
          darkMode ? 'text-ink' : 'text-light-ink'
        }`}>
          <BookOpen className="w-5 h-5" />
          Repositories
        </h3>
        <span className={`text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300 ${
          darkMode 
            ? 'bg-surface-hover text-ink-muted border border-surface-border' 
            : 'bg-light-elevated text-light-muted border border-light-border'
        }`}>
          {repos.length} repos
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo, index) => (
          <RepoCard key={repo.id} repo={repo} darkMode={darkMode} index={index} />
        ))}
      </div>
    </div>
  )
}
