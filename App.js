import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import "./index.css";

const API_URL = "https://ott-details.p.rapidapi.com/search";
const API_KEY = "0d9bbb0e0dmshd990c15c8d2157cp1b01fajsnf4da6860697e";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    setLoading(true);  // Show loading state

    try {
      const response = await axios.get(API_URL, {
        params: {
          title: query,
          page: 1,  // You can adjust the page parameter if needed
        },
        headers: {
          "x-rapidapi-host": "ott-details.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);  // Hide loading state
    }
  };

  return (
    <div className="App">
      <h1>OTT Platform Search</h1>
      <Search query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <Results movies={movies} />}
    </div>
  );
}

export default App;
