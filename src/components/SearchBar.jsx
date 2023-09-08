import { useState, useEffect } from "react";
import { API_URL } from "../utils/ApiURL";
import searchIcon from "../assets/image/glass-icon.png";

export default function SearchBar({ setMovie, page, setPage, setLoading }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (page == 0) return;

    searchMovie(searchInput);
  }, [page]);

  const searchMovie = async (title) => {
    setMovie([]);
    setLoading(true);

    const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    const data = await response.json();

    setMovie(data.Search);
    setLoading(false);
  };

  function inputHandler(e) {
    setSearchInput(e.target.value);
  }

  function hitKey(e) {
    if (e.keyCode != 13) return;
    setPage(1);
    if (page == 0) return;
    searchMovie(searchInput);
  }

  return (
    <div className="search-bar">
      {/* <h1>Movie Hub</h1> */}
      <div className="search">
        <label className="eye-glass" htmlFor="search-input">
          <img src={searchIcon} />
        </label>
        <input
          id="search-input"
          className="search-input"
          placeholder="Search movies"
          type="search"
          value={searchInput}
          onChange={inputHandler}
          onKeyDown={hitKey}
        />
      </div>
    </div>
  );
}
