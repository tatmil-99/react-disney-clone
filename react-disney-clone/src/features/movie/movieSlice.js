import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newDisney: null,
  trending: null,
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.newDisney = action.payload.newDisney;
      state.recommend = action.payload.recommend;
      state.trending = action.payload.trending;
    },
  },
}); 

export const { setMovies } = movieSlice.actions

export const selectRecommended = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;