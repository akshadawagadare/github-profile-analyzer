const BASE_URL = "https://api.github.com/users";

const request = async (endpoint) => {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const message = errorData?.message || "Something went wrong";
    throw new Error(message);
  }

  return response.json();
};

export const getUserProfile = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  return request(`${BASE_URL}/${username}`);
};

export const getUserRepos = async (username) => {
  if (!username?.trim()) {
    throw new Error("Username is required");
  }

  return request(`${BASE_URL}/${username}/repos?per_page=100&sort=updated`);
};

export const getCompleteUserData = async (username) => {
  const [profile, repos] = await Promise.all([
    getUserProfile(username),
    getUserRepos(username),
  ]);

  return { profile, repos };
};