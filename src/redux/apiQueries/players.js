import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const playersSlice = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.balldontlie.io/api/v1`,
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: ({ currentPage = 0 }) => ({
        url: `/players?per_page=25&page=${currentPage}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  endpoints: playersEndpoints,
  reducerPath: playersReducerPath,
  reducer: playersReducer,
  middleware: playersMiddleware,
} = playersSlice;
