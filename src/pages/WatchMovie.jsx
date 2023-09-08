import { useParams } from "react-router-dom";
import { API_URL } from "../utils/ApiURL";
import { useEffect, useRef, useState } from "react";
import "./WatchMovie.css";

export default function WatchMovie() {
  const [movieData, setMovieData] = useState(new Object());
  const imageRef = useRef();
  let { id } = useParams();

  let url = `https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`;
  useEffect(() => {
    const getMovieData = async function (id) {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovieData(data);
      console.log(data);
    };

    getMovieData(id);
  }, []);

  return (
    <section className="section-movie">
      <div className="watch-movie_container">
        <div className="movie-more_info">
          <h2>{movieData.Title}</h2>
          <span>{movieData.Year}</span>
          <p>{movieData.Plot}</p>
        </div>
        <div className="backgrund-image_container">
          <img src={movieData.Poster} />
        </div>
      </div>
    </section>
  );
}
