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
import { Link } from "react-router-dom";
import store from "/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/redux/store.js";
import { fetchArticles } from "/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/features/ArticleCard/articlesSlice.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CountryCard({ country }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://www.countryflags.io/${country.CountryCode}/flat/64.png`}
          title="Country Stats"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.Country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Country Code: {country.CountryCode} <br></br>
            New Confirmed:{country.NewConfirmed}
            <br></br>
            New Deaths: {country.NewDeaths}
            <br></br>
            New Recovered: {country.NewRecovered}
            <br></br>
            Total Confirmed: {country.TotalConfirmed}
            <br></br>
            Total Deaths: {country.TotalDeath}
            <br></br>
            Total Recovered: {country.TotalRecovered}
            <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(
              fetchArticles(
                `https://newsapi.org/v2/top-headlines?q=corona&country=${country.CountryCode}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
              )
            );
          }}
          component={country}
          to="/articles"
        >
          News Articles for: {country.Country}
        </Button>
      </CardActions>
    </Card>
  );
}
