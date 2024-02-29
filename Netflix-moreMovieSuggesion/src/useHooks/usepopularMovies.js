import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addnowpopularmovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getpopularmovies();
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
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDAzYzI0MDc4ZTkxOGY3ZDg5ZmFmMTY4OTY3MGQ0ZSIsInN1YiI6IjY1ZDY0MzRmNWFkNzZiMDE0ODczYmRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJOVIApyinFSM1QSIgQf1wB_-5B9MLOSs30kbL7mcK0",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
