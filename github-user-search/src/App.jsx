import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">GitHub User Search</h1>
      </header>

  
      <nav className="p-4 bg-white shadow">
        <Link className="text-blue-500 hover:underline" to="/">
          Home
        </Link>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}
