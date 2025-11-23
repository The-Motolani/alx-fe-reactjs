import React, { useState } from 'react';
import { fetchUserData } from "../services/githubService";

export default function Search() {
  // basic single-user state
  const [username, setUsername] = useState('');
  const [userResult, setUserResult] = useState(null);

  // advanced search state
  const [advQuery, setAdvQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // single user submit
  const handleLookup = async (event) => {
    event.preventDefault();
    setError('');
    setUserResult(null);
    if (!username.trim()) return setError('Looks like we cant find the user'); // guard

    setLoading(true);
    try {
      const data = await fetchUserData(username.trim());
      setUserResult(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  // advanced search submit
  const handleAdvancedSearch = async (event) => {
    event.preventDefault();
    setError('');
    setSearchResults([]);
    setLoading(true);

    try {
      const qObj = {
        q: advQuery.trim(),
        location: location.trim() || undefined,
        minRepos: minRepos ? Number(minRepos) : undefined,
        page: 1,
        per_page: 30,
      };
      const data = await searchUs
      ers(qObj);
      setSearchResults(data.items || []);
      if (!data.items || data.items.length === 0) {
        setError('Looks like we cant find the user');
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Single user lookup */}
      <section className="p-4 border rounded bg-white">
        <h2 className="text-xl font-medium mb-3">Find a GitHub user</h2>
        <form onSubmit={handleLookup} className="flex gap-2">
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username (e.g. torvalds)"
            className="flex-1 p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 border rounded">
            Search
          </button>
        </form>

        {loading && <p className="mt-3">Loading...</p>}
        {error && <p className="mt-3 text-red-600">{error}</p>}

        {userResult && !loading && (
          <div className="mt-4 flex gap-4 items-center">
            <img src={userResult.avatar_url} alt="avatar" className="w-20 h-20 rounded-full" />
            <div>
              <div className="font-semibold">{userResult.name || userResult.login}</div>
              <a
                href={userResult.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600"
              >
                View profile
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Advanced search */}
      <section className="p-4 border rounded bg-white">
        <h2 className="text-xl font-medium mb-3">Advanced search</h2>
        <form onSubmit={handleAdvancedSearch} className="grid grid-cols-1 gap-3">
          <input
            value={advQuery}
            onChange={(e) => setAdvQuery(e.target.value)}
            placeholder="Username or keywords"
            className="p-2 border rounded"
          />
          <div className="flex gap-2">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location (city/country)"
              className="flex-1 p-2 border rounded"
            />
            <input
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Min repos"
              type="number"
              className="w-32 p-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 border rounded">
              Search
            </button>
          </div>
        </form>

        {loading && <p className="mt-3">Loading...</p>}
        {error && !loading && <p className="mt-3 text-red-600">{error}</p>}

        {searchResults && searchResults.length > 0 && (
          <ul className="mt-4 space-y-3">
            {searchResults.map((u) => (
              <li key={u.id} className="p-3 border rounded flex items-center gap-3 bg-gray-50">
                <img src={u.avatar_url} alt={u.login} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-medium">{u.login}</div>
                  <a href={u.html_url} target="_blank" rel="noreferrer" className="text-sm text-blue-600">
                    View profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
