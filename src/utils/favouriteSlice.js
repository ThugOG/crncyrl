import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favs: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      const isPresent = state.favs.find((item) => {
        return item.animeTitle === action.payload.animeTitle ? true : false;
      });
      if (!isPresent) {
        state.favs.push(action.payload);
      }
    },
    removeSelection: (state, action) => {
      const id = action.payload;
      state.favs = state.favs.filter((item) => {
        return item.animeTitle !== id;
      });
    },
    clearFavourite: (state) => {
      state.favs = [];
    },
  },
});

export const { addFavourite, removeSelection, clearFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
