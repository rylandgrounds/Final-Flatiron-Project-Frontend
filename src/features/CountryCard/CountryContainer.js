import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CountryCard from "./CountryCard.js";
import Grid from "@material-ui/core/Grid";


export default function CountryContainer({ countries }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
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
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </React.Fragment>
  );
}
