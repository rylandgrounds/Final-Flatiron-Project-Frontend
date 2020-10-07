import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticlesFromBack = createAsyncThunk(
  "articles/fetchArticlesFromBack",
  async () => {
    const response = await fetch("http://localhost:3000/articles")
      .then((res) => res.json())
      .then((res) => res.data);
    return response;
  }
);
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (url) => {
    const response = await fetch(url)
      .then((res) => res.json())
      .then((res) => res.articles);
    return response;
  }
);

export const postArticle = createAsyncThunk(
  "articles/postArticle",
  async (article) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(article),
    };
    fetch("http://localhost:3000/articles", configObj)
      .then((res) => res.json())
      .then((res) => res);
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    [postArticle.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [fetchArticlesFromBack.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { articles } = articlesSlice.actions;
export default articlesSlice.reducer;
