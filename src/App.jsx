import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import RepoList from "./components/RepoList/RepoList.jsx";
import Spinner from "./components/Spinner.jsx";
import { getCompleteUserData } from "./Services/githubApi.js";
import StarsForksChart from "./components/StarsForksChart.jsx";

function App() {
  const [username, setUsername] = useState("octocat");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // DARK MODE STATE
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleFetch = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const result = await getCompleteUserData(username);

      const sortedRepos = result.repos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      setData({
        profile: result.profile,
        repos: sortedRepos,
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {/* DARK MODE BUTTON */}
      <div style={{ textAlign: "right" }}>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            padding: "10px 18px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            background:
              theme === "light"
                ? "linear-gradient(135deg, #222, #444)"
                : "linear-gradient(135deg, #ffda79, #ffb347)",
            color: theme === "light" ? "#fff" : "#333",
            boxShadow:
              theme === "light"
                ? "0 4px 10px rgba(0,0,0,0.35)"
                : "0 4px 10px rgba(255,200,0,0.5)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* TITLE */}
      <h1 style={{ textAlign: "center" }}>GitHub Explorer</h1>
      <p style={{ textAlign: "center", color: "var(--text)" }}>
        Search any GitHub username to view profile and repositories.
      </p>

      {/* SEARCH INPUT */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleFetch}
          style={{
            marginLeft: "10px",
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "6px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Fetch
        </button>
      </div>

      {loading && <Spinner />}

      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          {error}
        </p>
      )}

      {data && (
        <>
          <ProfileCard profile={data.profile} />
          <RepoList repos={data.repos} />

          {/* CHART */}
          {data.repos.length > 0 && (
            <div style={{ marginTop: "30px" }}>
              <StarsForksChart repos={data.repos} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
