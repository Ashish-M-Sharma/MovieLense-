import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = ({ searchQuery, triggerSearch, setTriggerSearch }) => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "2138068e";
  const navigate = useNavigate();

  const getMovies = async (query) => {
    try {
      const response = await Axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (triggerSearch && searchQuery.trim() !== "") {
      getMovies(searchQuery);
      setTriggerSearch(false);
    }
  }, [triggerSearch]);

  const handleMovieClick = (movie) => {
    navigate(`/MovieDetails/${movie.imdbID}`, { state: { movie } });
  };

  return (
    <section className="p-6">
      {movies.length === 0 ? (
        <p className="text-center text-gray-500">No movies found...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-120 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
              <p className="text-gray-500">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Movies;
