import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingmovies);

  if (!movies) return;

  const mainMovies = movies[0];

  const { overview, title, id } = mainMovies;
  return (
    <div>
      <VideoTitle titleOverview={overview} titleName={title} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
