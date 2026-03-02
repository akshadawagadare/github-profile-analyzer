import React from "react";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      marginBottom: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={profile.avatar_url}
        alt={profile.login}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{profile.name || profile.login}</h2>
      <p><strong>Username:</strong> {profile.login}</p>
      {profile.bio && <p><strong>Bio:</strong> {profile.bio}</p>}
      <p><strong>Followers:</strong> {profile.followers}</p>
      <p><strong>Following:</strong> {profile.following}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProfileCard;
