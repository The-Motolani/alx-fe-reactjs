import React from "react";
import { useState } from "react";
import { fetchUserData } from "../../services/githubService";

const Search = () => {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
  const handleClick = async(event) => {
    event.preventDefault();
    if (!query.trim()) {
      setError("Please enter a username");
      setUser(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
       const data = await fetchUserData(query);
       setUser(data); 
    } catch (error) {
        console.error(error);
        setError("Looks like we can't find the user");
        setUser(null);
    } finally {
        setLoading(false);
    }
};
    return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleClick}>
      <input type="text"
      value={query} 
      placeholder="Search GitHub username..."
    onChange={(event) => setQuery(event.target.value)}/>
        </form>
        
        {loading && <p>Loading...</p>}
        {user && !loading && (
            <div>
                <img 
                    src={user.avatar_url || user.avatar?.url}
                    alt={user.login}
                    width='80'
                />
                <h3>{user.login}</h3>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                </a>
            </div>
        )}
        {error && !loading && <p>{error}</p>}
    </div>
      );
};

export default Search;