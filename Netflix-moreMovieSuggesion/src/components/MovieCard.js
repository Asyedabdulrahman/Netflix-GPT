import React from "react";
import { imgCDN } from "../utils/constant";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-48 mr-3">
      <img alt="syed-card" src={imgCDN + posterpath} className="rounded-sm" />
    </div>
  );
};

export default MovieCard;
