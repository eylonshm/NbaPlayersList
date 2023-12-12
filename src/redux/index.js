import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import * as apiQueries from "./apiQueries";
import * as slices from "./apiSlices";

const store = configureStore({
  reducer: {
    players: slices.playersSliceReducer,
    [apiQueries.playersReducerPath]: apiQueries.playersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiQueries.playersMiddleware]),
});

const ApiProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ApiProvider;
export * from "./apiQueries";
export * from "./apiSlices";
export * from "./selectors";
