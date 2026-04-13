import { Users, UserCheck, MapPin, Link2, Building2, BookOpen, GitFork, ExternalLink, Calendar, X } from 'lucide-react'

function StatCard({ icon: Icon, label, value, color, darkMode }) {
  const colorClasses = {
    blue: darkMode ? 'text-brand bg-brand/10 group-hover:bg-brand/20' : 'text-blue-600 bg-blue-50 group-hover:bg-blue-100',
    purple: darkMode ? 'text-purple bg-purple/10 group-hover:bg-purple/20' : 'text-purple-600 bg-purple-50 group-hover:bg-purple-100',
    green: darkMode ? 'text-success bg-success/10 group-hover:bg-success/20' : 'text-green-600 bg-green-50 group-hover:bg-green-100',
    orange: darkMode ? 'text-warning bg-warning/10 group-hover:bg-warning/20' : 'text-orange-600 bg-orange-50 group-hover:bg-orange-100',
  }

  return (
    <div className={`group flex flex-col items-center gap-2 p-4 rounded-xl border cursor-default transition-all duration-300 hover:scale-[1.02] ${
      darkMode
        ? 'bg-surface-card border-surface-border hover:border-surface-hover'
        : 'bg-white border-light-border hover:border-light-muted hover:shadow-sm'
    }`}>
      <div className={`p-2 rounded-lg transition-colors duration-300 ${colorClasses[color]}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-center">
        <p className={`text-xl font-bold tabular-nums transition-colors duration-300 ${
          darkMode ? 'text-ink' : 'text-light-ink'
        }`}>
          {value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}
        </p>
        <p className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
          darkMode ? 'text-ink-muted' : 'text-light-muted'
        }`}>
          {label}
        </p>
      </div>
    </div>
  )
}

function MetaItem({ icon: Icon, children, href, darkMode }) {
  const baseClasses = `inline-flex items-center gap-1.5 text-sm transition-colors duration-200 ${
    darkMode ? 'text-ink-muted' : 'text-light-muted'
  }`
  const hoverClasses = href ? (darkMode ? 'hover:text-brand' : 'hover:text-blue-600') : ''

  const content = (
    <>
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="truncate max-w-[200px]">{children}</span>
    </>
  )

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={`${baseClasses} ${hoverClasses}`}>
      {content}
    </a>
  ) : (
    <span className={baseClasses}>{content}</span>
  )
}

export default function ProfileCard({ profile, darkMode }) {
  const {
    avatar_url, name, login, bio, followers, following, public_repos, location,
    blog, company, twitter_username, html_url, public_gists, created_at,
  } = profile

  const joinDate = new Date(created_at).toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  })

  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
      darkMode
        ? 'bg-surface-card border-surface-border shadow-card'
        : 'bg-white border-light-border shadow-card-light'
    }`}>
      {/* Header gradient */}
      <div className={`h-24 relative ${
        darkMode 
          ? 'bg-gradient-to-r from-brand/20 via-purple/20 to-brand/20' 
          : 'bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100'
      }`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.3),transparent)]" />
      </div>

      {/* Main content */}
      <div className="px-6 pb-6 -mt-12">
        {/* Avatar and main info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
          <a 
            href={html_url} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-shrink-0 group"
          >
            <div className={`p-1 rounded-full transition-all duration-300 ${
              darkMode ? 'bg-surface-card' : 'bg-white'
            } group-hover:scale-105`}>
              <img
                src={avatar_url}
                alt={`${login}'s avatar`}
                className={`w-28 h-28 rounded-full object-cover ring-4 transition-all duration-300 ${
                  darkMode 
                    ? 'ring-surface-card group-hover:ring-brand/30' 
                    : 'ring-white group-hover:ring-blue-200'
                }`}
              />
            </div>
          </a>

          <div className="flex-1 text-center sm:text-left pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                darkMode ? 'text-ink' : 'text-light-ink'
              }`}>
                {name || login}
              </h2>
              <span className={`text-base font-medium transition-colors duration-300 ${
                darkMode ? 'text-brand' : 'text-blue-600'
              }`}>
                @{login}
              </span>
            </div>
            <div className={`flex items-center justify-center sm:justify-start gap-1.5 mt-1 text-xs transition-colors duration-300 ${
              darkMode ? 'text-ink-faint' : 'text-light-muted'
            }`}>
              <Calendar className="w-3 h-3" />
              <span>Joined {joinDate}</span>
            </div>
          </div>

          {/* View Profile Button */}
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${
              darkMode
                ? 'bg-surface-hover hover:bg-surface-border text-ink border border-surface-border'
                : 'bg-light-elevated hover:bg-light-hover text-light-ink border border-light-border'
            }`}
          >
            View Profile
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Bio */}
        {bio && (
          <p className={`mt-4 text-base leading-relaxed transition-colors duration-300 ${
            darkMode ? 'text-ink-secondary' : 'text-light-secondary'
          }`}>
            {bio}
          </p>
        )}

        {/* Meta info */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 mt-4">
          {company && (
            <MetaItem icon={Building2} darkMode={darkMode}>
              {company.replace('@', '')}
            </MetaItem>
          )}
          {location && (
            <MetaItem icon={MapPin} darkMode={darkMode}>{location}</MetaItem>
          )}
          {blog && (
            <MetaItem 
              icon={Link2} 
              href={blog.startsWith('http') ? blog : `https://${blog}`} 
              darkMode={darkMode}
            >
              {blog.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </MetaItem>
          )}
          {twitter_username && (
            <MetaItem 
              icon={Twitter} 
              href={`https://twitter.com/${twitter_username}`} 
              darkMode={darkMode}
            >
              @{twitter_username}
            </MetaItem>
          )}
        </div>

        {/* Mobile View Profile Button */}
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className={`sm:hidden flex items-center justify-center gap-2 w-full mt-5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
            darkMode
              ? 'bg-accent hover:bg-accent-hover text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          View GitHub Profile
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard icon={Users} label="Followers" value={followers} color="blue" darkMode={darkMode} />
          <StatCard icon={UserCheck} label="Following" value={following} color="purple" darkMode={darkMode} />
          <StatCard icon={BookOpen} label="Repos" value={public_repos} color="green" darkMode={darkMode} />
          <StatCard icon={GitFork} label="Gists" value={public_gists} color="orange" darkMode={darkMode} />
        </div>
      </div>
    </div>
  )
}
