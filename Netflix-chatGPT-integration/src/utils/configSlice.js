import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config Slice",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguages: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguages } = configSlice.actions;
export default configSlice.reducer;
