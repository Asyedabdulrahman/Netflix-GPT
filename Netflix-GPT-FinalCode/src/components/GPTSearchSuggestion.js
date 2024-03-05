import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggestion = () => {
  const { gptmoviesNames, moviesResult } = useSelector((store) => store.gpt);
  if (!moviesResult) return null;

  return (
    <div className="p-4 m-4  text-white">
      <div>
        {gptmoviesNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesResult[index]}
          />
        ))}
        <MovieList title={gptmoviesNames[0]} movies={moviesResult[0]} />
      </div>
    </div>
  );
};

export default GPTSearchSuggestion;
