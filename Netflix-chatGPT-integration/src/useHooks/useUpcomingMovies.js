import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const nowUpComingMovies = useSelector((store) => store.movies.UpComingMovies);

  useEffect(() => {
    !nowUpComingMovies && UpcomingMovies();
  }, []);

  const UpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpcomingMovies;
