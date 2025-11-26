import axios from "axios";

const BASE_URL = "https://api.github.com";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Axios instance (optional but cleaner)
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN ? `token ${TOKEN}` : "",
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `${username}` : "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const url = `https://api.github.com/search/users?q=${query}`;

    const response = await api.get(url);
    return response.data.items; 
  } catch (error) {
    throw error;
  }
};
