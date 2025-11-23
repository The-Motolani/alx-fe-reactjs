import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export async function fetchUserData(username, location, minRepos) {
  try {
    let query = "";

    if (username) query += username;
    if (location) query += `location:${location}`;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(BASE_URL + query, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return { data: response.data.items, error: null };
  } catch (error) {
    return { data: null, error: "Search failed" };
  }
}