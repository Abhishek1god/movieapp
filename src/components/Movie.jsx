import React from "react";
import { Link } from "react-router-dom";

const MovieCard = function ({ movie: { Type, Poster, Title, Year, imdbID } }) {
  return (
    <div className="card">
      <Link to={`movie/${imdbID}`}>
        <img
          className="movie-img"
          src={
            Poster != "N/A"
              ? Poster
              : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
        />
      </Link>
      <h3>{Title}</h3>
      <p>{Year}</p>
    </div>
  );
};

export default MovieCard;
