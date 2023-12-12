import { createSlice } from "@reduxjs/toolkit";
import { playersEndpoints } from "../apiQueries";

const initialState = {
  playersArr: [],
  favorites: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    movePlayerToFavorites: () => {},
    removePlayerFromFavorites: () => {},
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      playersEndpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        state = state;
      }
    );
  },
});

export const playersSliceReducer = playersSlice.reducer;
export const { movePlayerToFavorites, removePlayerFromFavorites } =
  playersSlice.actions;
