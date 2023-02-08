import React from "react";
import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const { favoriteMovies, onRemoveFavorite } = props;

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {favoriteMovies.map((movie) => (
          <div
            key={movie.id}
            className="py-1 flex gap-2 justify-between items-center"
          >
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            <button
              className=" bg-slate-600 border rounded-lg text-zinc-100 px-1 py-1  max-h-8"
              onClick={() => onRemoveFavorite(movie)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovieList;
