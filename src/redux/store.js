import {configureStore} from '@reduxjs/toolkit'
import countriesReducer from '../features/CountryCard/countriesSlice.js';
import articlesReducer from '../features/ArticleCard/articlesSlice.js'
const store = configureStore({
reducer:{
    countries: countriesReducer,
    articles: articlesReducer
}

})

export default store
