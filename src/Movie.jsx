import React from "react";

const MovieCard = function ({ movie: { Type, Poster, Title } }) {
  return (
    <div className="card">
      <p>{Type}</p>
      <img
        src={
          Poster != "N/A"
            ? Poster
            : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        }
      />
      <h3>{Title}</h3>
    </div>
  );
};

export default MovieCard;
