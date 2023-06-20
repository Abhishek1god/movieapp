import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./Movie";

const API_URL = "https://omdbapi.com?apikey=f2bb7370";
const movie1 = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

function App() {
  const [movie, setMovie] = useState([]);
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovie(data.Search);
  };
  function hitKey(e) {
    if (e.keyCode != 13) return;
    searchMovie(e.target.value);
  }

  // useEffect(() => {
  //   searchMovie("Memento");
  // }, []);

  return (
    <>
      <div className="search-bar">
        <h1>Movie Hub</h1>
        <input className="search" type="search" onKeyDown={hitKey} />
      </div>
      <div className="container">
        {movie ? (
          movie.map(function (mv) {
            return <MovieCard movie={mv} />;
          })
        ) : (
          <div className="error">No Movie Found</div>
        )}
      </div>
    </>
  );
}
export default App;
