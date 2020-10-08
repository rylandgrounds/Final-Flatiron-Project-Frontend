import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/App.js";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store.js";
import { fetchCountries } from "./features/CountryCard/countriesSlice";
import { fetchArticlesFromBack } from "./features/ArticleCard/articlesSlice";

store.dispatch(fetchCountries());
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
