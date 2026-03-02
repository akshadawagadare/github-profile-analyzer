import React, { useState } from "react";

const RepoList = ({ repos }) => {
  const [sortBy, setSortBy] = useState("");
  const [language, setLanguage] = useState("");

  if (!repos || repos.length === 0) return <p>No repositories found.</p>;

  // -------------------------------
  // GET UNIQUE LANGUAGES
  // Why? To auto-fill filter dropdown based on real repo data.
  // -------------------------------
  const languages = [
    "All",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  // -------------------------------
  // FILTER BY LANGUAGE
  // -------------------------------
  const filteredRepos = repos.filter((repo) => {
    if (!language || language === "All") return true;
    return repo.language === language;
  });

  // -------------------------------
  // SORT LOGIC
  // -------------------------------
  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
    if (sortBy === "forks") return b.forks_count - a.forks_count;
    if (sortBy === "updated")
      return new Date(b.updated_at) - new Date(a.updated_at);

    return 0;
  });

  return (
    <div>
      <h3>Repositories ({sortedRepos.length})</h3>

      {/* FILTER + SORT CONTROLS */}
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        
        {/* LANGUAGE FILTER */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ padding: "5px 10px", borderRadius: "5px" }}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        {/* SORT */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: "5px 10px", borderRadius: "5px" }}
        >
          <option value="">Sort By</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="updated">Last Updated</option>
        </select>
      </div>

      {/* RENDER LIST */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedRepos.map((repo) => (
          <li
            key={repo.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #eee",
              borderRadius: "5px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", fontSize: "16px" }}
            >
              {repo.name}
            </a>

            {repo.stargazers_count > 0 && (
              <span> ⭐ {repo.stargazers_count}</span>
            )}
            {repo.forks_count > 0 && <span> | 🍴 {repo.forks_count}</span>}
            {repo.language && <span> | {repo.language}</span>}

            <div style={{ fontSize: "12px", color: "#666", marginTop: "3px" }}>
              Updated: {new Date(repo.updated_at).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
