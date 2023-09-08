import React from "react";
import { Link } from "react-router-dom";

const MovieCard = function ({
  movie: { Type, poster_path, title, release_date, id },
}) {
  return (
    <div className="card">
      <Link to={`movie/${id}`}>
        <img
          className="movie-img"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
        />
      </Link>
      <h3>{title}</h3>
      <p>{release_date}</p>
    </div>
  );
};

export default MovieCard;
