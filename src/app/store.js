import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/SearchSlice";
import subRedditReducer from "../features/SubRedditSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    subReddit: subRedditReducer,
  },
});
