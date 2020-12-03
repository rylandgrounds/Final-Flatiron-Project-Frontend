import React from "react";
import "./App.css";
import ArticleContainer from "./features/ArticleCard/ArticleContainer";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import CountryContainer from "./features/CountryCard/CountryContainer.js";
import WelcomeBox from "./features/WelcomeCard/WelcomeBox.js"
import ButtonAppBar from "./features/Headers/Navbar.js"

function App() {
  const countries = useSelector((state) => state.countries);
  if (!countries) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
    
      <ButtonAppBar />
      <Switch>

        <Route exact path="/">
        <WelcomeBox />
        </Route>

        <Route exact path="/countries">
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
