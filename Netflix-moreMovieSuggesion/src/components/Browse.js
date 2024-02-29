import React from "react";
import Header from "./Header";
import Playingmoviesapi from "../useHooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../useHooks/usepopularMovies";
import useTopRatedMovies from "../useHooks/useTopRatedMovies";
import useUpcomingMovies from "../useHooks/useUpcomingMovies";

const Browse = () => {
  Playingmoviesapi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
