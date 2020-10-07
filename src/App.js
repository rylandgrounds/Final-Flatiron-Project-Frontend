import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import CountryCard from "./features/CountryCard/CountryCard.js";
import ArticleCard from "./features/ArticleCard/ArticleCard.js";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";


function App() {
  const countries = useSelector((state) => state.countries);
  const articles = useSelector((state) => state.articles);
  if (!countries) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Grid container spacing={10} style={{ padding: "24px" }}>
            {countries.map((country) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                key={country.CountryCode}
              >
                <CountryCard country={country} />
              </Grid>
            ))}
          </Grid>
          </Route>
          <Route exact path="/articles">
          <Grid container spacing={10} style={{ padding: "24px" }}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={Math.random()}>
                <ArticleCard/>
              </Grid>
          </Grid>
          </Route>
          
      </Switch>
    </div>
  );
}
export default App;
