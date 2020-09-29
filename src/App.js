import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import CountryCard from "./features/CountryCard/CountryCard.js";
function App() {
  //const [users, setUsers] = useState([]);
  //useEffect(() => {
  //  async function fetchData() {
  //setUsers(
  //  await fetch("https://api.covid19api.com/summary")
  //.then((res) => res.json())
  //  .then((res) => res.Countries)
  //  );
  // }
  //fetchData();
  //}, []);
  return (
    <div className="App">
      <h3> Lali-Ho!</h3>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={user.CountryCode}>
            <CountryCard
              key={user.CountryCode}
              cc={user.CountryCode}
              img={`https://www.countryflags.io/${user.CountryCode}/flat/64.png`}
              name={user.Country}
              newconfirmed={user.NewConfirmed}
              newdeaths={user.NewDeaths}
              newrecovered={user.NewRecovered}
              totalconfirmed={user.TotalConfirmed}
              totaldeaths={user.TotalDeaths}
              totalrecovered={user.TotalRecovered}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default App;
