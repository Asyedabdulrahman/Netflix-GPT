import React from "react";
import Header from "./Header";
import Playingmoviesapi from "../useHooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../useHooks/usepopularMovies";
import useTopRatedMovies from "../useHooks/useTopRatedMovies";
import useUpcomingMovies from "../useHooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  Playingmoviesapi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const selector = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {selector ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
