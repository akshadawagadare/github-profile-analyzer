import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar.jsx'
import ProfileCard from "./components/ProfileCard"
import RepoList from './components/RepoList.jsx'
import Navbar from './components/Navbar.jsx'
import EmptyState from './components/EmptyState.jsx'
import ErrorState from './components/ErrorState.jsx'
import LoadingSkeleton from './components/LoadingSkeleton.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) return JSON.parse(saved)
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const handleSearch = async (query) => {
    if (!query.trim()) return
    setUsername(query.trim())
    setLoading(true)
    setError(null)
    setProfile(null)
    setRepos([])
    setSearched(true)

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${query.trim()}`),
        fetch(`https://api.github.com/users/${query.trim()}/repos?sort=updated&per_page=12`),
      ])

      if (!userRes.ok) {
        if (userRes.status === 404) throw new Error('User not found. Please check the username and try again.')
        if (userRes.status === 403) throw new Error('API rate limit exceeded. Please try again in a few minutes.')
        throw new Error('Failed to fetch user data. Please try again.')
      }

      const userData = await userRes.json()
      const reposData = reposRes.ok ? await reposRes.json() : []

      setProfile(userData)
      setRepos(Array.isArray(reposData) ? reposData : [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    if (username) {
      handleSearch(username)
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-surface bg-hero-pattern' 
        : 'bg-light-bg bg-hero-pattern-light'
    }`}>
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 border transition-colors duration-300
            dark:bg-surface-card dark:border-surface-border dark:text-brand
            bg-light-elevated border-light-border text-blue-600">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Open Source Tool
          </div>
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${
            darkMode ? 'text-ink' : 'text-light-ink'
          }`}>
            <span className="gradient-text">GitHub</span> Profile Analyzer
          </h1>
          <p className={`text-lg max-w-xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-ink-muted' : 'text-light-muted'
          }`}>
            Discover developers, explore their work, and analyze GitHub profiles with ease.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 max-w-2xl mx-auto">
          <SearchBar onSearch={handleSearch} darkMode={darkMode} loading={loading} />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {loading && <LoadingSkeleton darkMode={darkMode} />}

          {!loading && error && (
            <ErrorState message={error} darkMode={darkMode} onRetry={handleRetry} />
          )}

          {!loading && !error && !searched && <EmptyState darkMode={darkMode} onSearch={handleSearch} />}

          {!loading && !error && searched && !profile && !error && (
            <EmptyState darkMode={darkMode} onSearch={handleSearch} />
          )}

          {!loading && !error && profile && (
            <div className="space-y-8 animate-slide-up">
              <ProfileCard profile={profile} darkMode={darkMode} />
              <RepoList repos={repos} darkMode={darkMode} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm transition-colors duration-300 ${
        darkMode ? 'text-ink-faint' : 'text-light-muted'
      }`}>
        <p>
          Built with React + Tailwind CSS
          <span className="mx-2">·</span>
          <a 
            href="https://docs.github.com/rest" 
            target="_blank" 
            rel="noreferrer"
            className={`hover:underline transition-colors ${darkMode ? 'hover:text-brand' : 'hover:text-blue-600'}`}
          >
            Powered by GitHub API
          </a>
        </p>
      </footer>
    </div>
  )
}
