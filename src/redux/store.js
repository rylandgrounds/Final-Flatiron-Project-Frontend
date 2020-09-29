import {configureStore} from '@reduxjs/toolkit'
import countryCardReducer from '/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/features/CountryCard/countryCardSlice.js';
const store = configureStore({
reducer:{
    countryCard: countryCardReducer
}

})

export default store
