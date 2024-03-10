import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-[208px] relative z-20 pl-1 ">
      <MovieList title={"Now playing"} movies={movies.nowplayingmovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Trending"} movies={movies.nowpopularmovies} />
      <MovieList title={"Upcoming"} movies={movies.UpComingMovies} />
      <MovieList title={"Mixed"} movies={movies.nowplayingmovies} />
    </div>
  );
};

export default SecondaryContainer;
