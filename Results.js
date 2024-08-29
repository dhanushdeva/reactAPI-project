import React from "react";
import MovieCard from "./MovieCard";
import "./styles/Results.css";

function Results({ movies }) {
  return (
    <div className="results-container">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbid}
            title={movie.title}
            genre={movie.genre}
            imageurl={movie.imageurl}
            released={movie.released}
            synopsis={movie.synopsis}
            type={movie.type}
          />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Results;
