import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import CountryCard from "./features/CountryCard/CountryCard.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const countries = useSelector((state) => state.countries);
  if (!countries) {
    return(
      <div> 
        Loading...
      </div>
    )
  }
  
  return (
    <div className="App">
      <h3> Lali-Ho!</h3>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {countries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={country.CountryCode}>

            <CountryCard country={country}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default App;
