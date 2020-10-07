import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import ArticleCard from "./features/ArticleCard/ArticleCard.js";
import ArticleContainer from "./features/ArticleCard/ArticleContainer";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import CountryContainer from "./features/CountryCard/CountryContainer.js";

function App() {
  const countries = useSelector((state) => state.countries);
  const articles = useSelector((state) => state.articles[0]);
  if (!countries) {
    return <div>Loading...</div>;
  }
  if (!articles) {
    return <div> Loading...</div>;
  }
  return (
    <div className="App">
      <h1>Welcome to the Corona Country Spotlight!</h1>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={Math.random()}>
            <ArticleCard article={article.attributes} />
          </Grid>
        ))}
      </Grid>
      <Switch>
        <Route exact path="/">
          <CountryContainer countries={countries} />
        </Route>
        <Route exact path="/articles">
          <ArticleContainer />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
