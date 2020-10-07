import React from "react";
import {useDispatch} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import store from "/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/redux/store.js";
import { fetchCountries } from "../CountryCard/countriesSlice";
import {postArticle} from "./articlesSlice.js";
import { Link as RouterLink } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ArticleCard({ article }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  function handleOnCountryClick () {
    store.dispatch(fetchCountries("https://api.covid19api.com/summary"))
  }
  function handleOnSaveClick () {
    dispatch(postArticle(article))
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title="Article Info"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <br></br>
                Article Description: {article.description}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleOnCountryClick} component={RouterLink} to="/">
         Country Page
        </Button>
        <Button variant="contained" color="primary" onClick={handleOnSaveClick}>
         Save It!
        </Button>
      </CardActions>
    </Card>
  );
}

