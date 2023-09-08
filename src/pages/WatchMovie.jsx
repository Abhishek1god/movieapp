import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../utils/ApiURL";
import { useEffect, useState } from "react";
import "./WatchMovie.css";

export default function WatchMovie() {
  const [movieData, setMovieData] = useState(new Object());

  let { id } = useParams();

  useEffect(() => {
    const getMovieData = async function (id) {
      const response = await fetch(
        `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();

      setMovieData(data);
    };

    getMovieData(id);
  }, []);

  return (
    <section className="section-movie">
      <div className="watch-movie_container">
        <div className="movie-more_info">
          <h2>{movieData.title}</h2>
          <span>Released Date: {movieData.release_date}</span>
          <span>Runtime: {movieData.runtime} mins</span>
          <p>{movieData.overview}</p>
        </div>
        <div className="backgrund-image_container">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
          />
        </div>
      </div>
    </section>
  );
}
