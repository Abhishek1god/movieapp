import { useState, useEffect } from "react";
import "./Home.css";
import { API_URL } from "../utils/ApiURL";
import searchIcon from "../assets/image/glass-icon.png";
import Pagination from "../components/Pagination";
import MovieCard from "../components/Movie";
import SearchBar from "../components/SearchBar";

function Home() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  function paginationHandler(e) {
    let action = e.currentTarget.dataset.page;

    if (action === "next") {
      setPage((prevPage) => prevPage + 1);
    } else {
      if (page == 1) return;

      setPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <>
      <SearchBar
        setMovie={setMovie}
        page={page}
        setPage={setPage}
        setLoading={setLoading}
      />
      <section className="bottom-section">
        <div className="bottom-section_right">
          {loading ? (
            <div className="loading">Loading ...</div>
          ) : (
            <div className="container">
              {movie ? (
                movie.map(function (mv) {
                  return <MovieCard key={mv.imdbID} movie={mv} />;
                })
              ) : (
                <div className="error">Not Found</div>
              )}
            </div>
          )}
          {loading && (
            <Pagination pageNum={page} handlePagination={paginationHandler} />
          )}
          {movie && movie.length > 0 && (
            <Pagination pageNum={page} handlePagination={paginationHandler} />
          )}
        </div>
      </section>
    </>
  );
}
export default Home;
