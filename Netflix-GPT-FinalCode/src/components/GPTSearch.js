import React from "react";
import GPTSeachInputBar from "./GPTSeachInputBar";
import GPTSearchSuggestion from "./GPTSearchSuggestion";
import { bgURL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img alt="backgroud-img" src={bgURL} />
      </div>
      <GPTSeachInputBar />
      <GPTSearchSuggestion />
    </div>
  );
};

export default GPTSearch;
