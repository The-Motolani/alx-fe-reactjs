import { GITHUB_API_KEY } from "./api";

export const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`
  );
  return response.json();
}