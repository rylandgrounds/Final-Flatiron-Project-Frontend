import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
   const response = await fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) => res.Countries);
      return response
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState: null,
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      return action.payload
    },
  },
});

export const { countries } = countriesSlice.actions;

export const selectCountries = (state) => state.countryCard.countries;
export default countriesSlice.reducer;
