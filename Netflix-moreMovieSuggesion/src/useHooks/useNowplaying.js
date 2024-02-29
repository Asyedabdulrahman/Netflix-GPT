import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/movieSlice";
import { useEffect } from "react";

const Playingmoviesapi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getnowplayingMovies();
  }, []);

  const getnowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addnowplayingmovies(json.results));
  };
};

export default Playingmoviesapi;
