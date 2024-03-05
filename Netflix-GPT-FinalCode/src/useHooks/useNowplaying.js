import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addnowplayingmovies } from "../utils/movieSlice";
import { useEffect } from "react";

const Playingmoviesapi = () => {
  const dispatch = useDispatch();

  const nowPlayingmovies = useSelector(
    (store) => store.movies.nowPlayingmovies
  );

  useEffect(() => {
    !nowPlayingmovies && getnowplayingMovies();
  }, []);
  //Memoization techniques is used to make a call unnecessarily to the server,it is simple technique to implement. But it plays a major role in backend to reduce server load.

  const getnowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    dispatch(addnowplayingmovies(json.results));
  };
};

export default Playingmoviesapi;
