import axios from 'axios';

const GITHUB_BASE = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY || '';

const axiosInstance = axios.create({
  baseURL: GITHUB_BASE,
  headers: token ? { Authorization: `token ${token}` } : undefined,
});

/**
 * Fetch single user profile by username
 * @param {string} username
 */
export async function fetchUserData(username) {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
}
export async function searchUsers(queryObj = {}) {
  const { q = '', location, minRepos, page = 1, per_page = 30 } = queryObj;

  let qualifiers = [];

  if (location) qualifiers.push(`location:${location}`);
  if (Number.isFinite(minRepos)) qualifiers.push(`repo:>=${minRepos}`);

  const fullQuery = [q, ...qualifiers].filter(Boolean).join('+');
  const url = `/search/users?q=${encodeURIComponent(fullQuery)}&page=${page}&per_page=${per_page}`;

  const resp = await axiosInstance.get(url);
  
  return resp.data;
}
