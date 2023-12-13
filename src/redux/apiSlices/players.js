import { createSlice } from "@reduxjs/toolkit";
import { playersEndpoints } from "../apiQueries";

const initialState = {
  playersArr: [],
  favorites: new Set(),
  currentPage: 1,
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: (create) => ({
    togglePlayerFavorite: create.reducer((state, { payload }) => {
      const { playerId } = payload;
      const isFavorite = state.favorites.has(playerId);

      if (isFavorite) {
        state.favorites.delete(playerId);
      } else {
        state.favorites.add(playerId);
      }
    }),
  }),

  extraReducers: (builder) => {
    builder.addMatcher(
      playersEndpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        const { data } = payload;
        if (data) {
          state.currentPage++;
          state.playersArr = [...state.playersArr, ...data];
        }
      }
    );
  },
});

export const playersSliceReducer = playersSlice.reducer;
export const { togglePlayerFavorite } = playersSlice.actions;
