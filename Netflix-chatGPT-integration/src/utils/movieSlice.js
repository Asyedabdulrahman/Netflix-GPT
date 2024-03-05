import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    trailerVideo: null,
    nowpopularmovies: null,
    topRatedMovies: null,
    UpComingMovies: null,
  },
  //initialState is considered as state
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addnowpopularmovies: (state, action) => {
      state.nowpopularmovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.UpComingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addnowplayingmovies,
  addTrailerVideo,
  addnowpopularmovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
