import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (url) => {
   const response = await fetch(url)
      .then((res) => res.json())
      .then((res) => res.articles)
      return response
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState: null,
  reducers: {

  },
  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      return action.payload
    },
  },
});


export const { articles } = articlesSlice.actions;
export default articlesSlice.reducer;