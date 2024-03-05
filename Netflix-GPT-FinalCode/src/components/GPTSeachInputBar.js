import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { toBeEmptyDOMElement } from "@testing-library/jest-dom/matchers";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSeachInputBar = () => {
  const selector = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchmovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies, commma seperated like the example results given ahead. Example result: gadar,sholay,don,leo, maanadu";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults?.choices[0]?.message?.content);

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchmovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({
        gptmoviesNames: gptMovies,
        moviesResult: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[3%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selector].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[selector].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSeachInputBar;
