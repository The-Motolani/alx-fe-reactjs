import React, { useState } from "react";
import { fetchUserData, searchUsers } from "./services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Basic search (Task 1)
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setResults([]);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  // Advanced search (Task 2)
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setResults([]);

    try {
      const data = await searchUsers({
        username,
        location,
        minRepos,
      });

      if (data.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setResults(data);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>

      {/* Basic Search Form */}
      <form onSubmit={handleBasicSearch} className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Basic Search</h3>

        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-3"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search User
        </button>
      </form>

      {/* Advanced Search Form */}
      <form onSubmit={handleAdvancedSearch}>
        <h3 className="text-lg font-semibold mb-2">Advanced Search</h3>

        <input
          type="text"
          placeholder="Username contains..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="text"
          placeholder="Location (example: Nigeria)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Search Advanced
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Basic Search Result */}
      {user && (
        <div className="mt-6 p-4 border rounded">
          <img src={user.avatar_url} alt="" className="w-20 h-20 rounded-full" />
          <h3 className="text-lg font-bold">{user.name}</h3>
          <a
            className="text-blue-500"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      )}

      {/* Advanced Search Results */}
      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3">Results:</h3>

          {results.map((item) => (
            <div key={item.id} className="p-3 border rounded mb-3">
              <img
                src={item.avatar_url}
                alt=""
                className="w-16 h-16 rounded-full"
              />
              <h4 className="font-semibold">{item.login}</h4>
              <a
                className="text-blue-500"
                href={item.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
