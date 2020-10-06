import {configureStore} from '@reduxjs/toolkit'
import countriesReducer from '../features/CountryCard/countriesSlice.js';
import articlesReducer from '/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/features/ArticleCard/articlesSlice.js'

const store = configureStore({
reducer:{
    countries: countriesReducer,
    articles: articlesReducer
}

})

export default store
