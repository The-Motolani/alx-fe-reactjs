import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  let debounceTimer;

  async function handleSearch(e) {
    e.preventDefault();

    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      setLoading(true);
      setErrorMsg("");
      setResults([]);

      const response = await fetchUserData(username, location, minRepos);

      if (response.error || !response.data.length) {
        setErrorMsg("Looks like we cant find the user.");
      } else {
        setResults(response.data);
      }

      setLoading(false);
    }, 300); // 300ms debounce
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Advanced GitHub User Search
      </h2>

      <form
        onSubmit={handleSearch}
        className="space-y-3 bg-gray-100 p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Minimum Repos..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-3 text-gray-700">Loading...</p>}

      {errorMsg && <p className="text-red-500 text-center mt-3">{errorMsg}</p>}

      <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-16 h-16 rounded-full flex-shrink-0"
              loading="lazy"
            />

            <div className="flex flex-col">
              <h3 className="font-semibold">{user.login}</h3>
              {user.location && (
                <span className="text-gray-500 text-sm">{user.location}</span>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-1"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;