import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addnowpopularmovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const nowPopularmovies = useSelector(
    (store) => store.movies.nowpopularmovies
  );

  useEffect(() => {
    !nowPopularmovies && getpopularmovies();
  }, []);

  const getpopularmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addnowpopularmovies(json.results));
  };
};

export default usePopularMovies;
