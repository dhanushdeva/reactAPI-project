import React from "react";
import "./styles/MovieCard.css";

function MovieCard({ title, genre, imageurl, released, synopsis, type }) {
  return (
    <div className="movie-card">
      {imageurl ? (
        <img src={imageurl} alt={title} onError={(e) => e.target.style.display = 'none'} />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <div className="movie-info">
        <h2>{title}</h2>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Released:</strong> {released}</p>
        <p><strong>Type:</strong> {type}</p>
        <p className="synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

export default MovieCard;
