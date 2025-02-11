import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import "../index.css";

const MovieDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const API_KEY = "2138068e";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await Axios.get(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <div className="mt-[350px]">
        {" "}
        <div class="main">
          <div class="up">
            <div class="loaders">
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
              <div class="loader"></div>
            </div>
            <div class="loadersB">
              <div class="loaderA">
                <div class="ball0"></div>
              </div>
              <div class="loaderA">
                <div class="ball1"></div>
              </div>
              <div class="loaderA">
                <div class="ball2"></div>
              </div>
              <div class="loaderA">
                <div class="ball3"></div>
              </div>
              <div class="loaderA">
                <div class="ball4"></div>
              </div>
              <div class="loaderA">
                <div class="ball5"></div>
              </div>
              <div class="loaderA">
                <div class="ball6"></div>
              </div>
              <div class="loaderA">
                <div class="ball7"></div>
              </div>
              <div class="loaderA">
                <div class="ball8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-full object-cover rounded-md"
      />
      <h2 className="text-3xl font-bold mt-4">{movie.Title}</h2>
      <p className="text-gray-500 text-lg">{movie.Year}</p>
      <p className="text-gray-700 mt-2">
        <strong>Actors:</strong> {movie.Actors} <br />
        <strong>Director:</strong> {movie.Director} <br />
        <strong>Writer:</strong> {movie.Writer} <br />
        <strong>Plot:</strong> {movie.Plot} <br />
        <strong>Language:</strong> {movie.Language} <br />
        <strong>Country:</strong> {movie.Country} <br />
        <strong>IMDB Rating:</strong> {movie.imdbRating} ⭐<br />
        <strong>Genre:</strong> {movie.Genre} <br />
        <strong>Released:</strong> {movie.Released} <br />
        <strong>Runtime:</strong> {movie.Runtime} <br />
        <strong>Awards:</strong> {movie.Awards} <br />
        <strong>Rated:</strong> {movie.Rated} <br />
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-1 flex items-center gap-2 rounded-md mb-4 mx-[300px]"
      >
        <span className="text-[28px]"> &#x2190;</span> Back
      </button>
    </div>
  );
};

export default MovieDetails;
