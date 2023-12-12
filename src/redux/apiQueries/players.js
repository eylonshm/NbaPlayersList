import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const playersSlice = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.balldontlie.io/api/v1`,
  }),
  endpoints: (builder) => ({
    getPlayers: builder.mutation({
      query: ({ currentPage }) => ({
        url: `/players`,
        method: "GET",
        body: {
          page: currentPage,
        },
      }),
    }),
  }),
});

export const {
  endpoints: playersEndpoints,
  reducerPath: playersReducerPath,
  reducer: playersReducer,
  middleware: playersMiddleware,
} = playersSlice;
