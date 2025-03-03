import { createSlice } from "@reduxjs/toolkit";

const subRedditSlice = createSlice({
  name: "subReddit",
  initialState: "",
  reducers: {
    setSubReddit(state, action) {
      return action.payload;
    },
  },
});

export const { setSubReddit } = subRedditSlice.actions;
export default subRedditSlice.reducer;
