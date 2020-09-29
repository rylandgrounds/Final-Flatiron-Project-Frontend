import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { countries, selectCountries } from "./countryCardSlice";

const dispatch = useDispatch();
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CountryCard({
  name,
  img,
  cc,
  newconfirmed,
  newdeaths,
  newrecovered,
  totalconfirmed,
  totaldeath,
  totalrecovered,
}) {
  const classes = useStyles();
  const countries = useSelector(selectCountries);
  const call = dispatch(countries);
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Country Stats"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Country Code: {cc} <br></br>
            New Confirmed:{newconfirmed}
            <br></br>
            New Deaths: {newdeaths}
            <br></br>
            New Recovered: {newrecovered}
            <br></br>
            Total Confirmed: {totalconfirmed}
            <br></br>
            Total Deaths: {totaldeath}
            <br></br>
            Total Recovered: {totalrecovered}
            <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
