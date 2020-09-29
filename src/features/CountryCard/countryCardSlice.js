import { createSlice } from "@reduxjs/toolkit";
import {useCorona} from '../hooks/useCorona.js'

export const countryCardSlice = createSlice({
  name: "countryCard",
  initialState: {
    countries: [],
  },
  reducers: {
    countries: (state) => {
      state.countries
    },
  },
});

export const { countries } = countryCardSlice.actions;



export const selectCountries = (state) => state.countryCard.countries;
export default countryCardSlice.reducer;
