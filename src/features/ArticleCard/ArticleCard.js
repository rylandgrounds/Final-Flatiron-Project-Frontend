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
import store from "/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/redux/store.js";
import { fetchArticles } from "/Users/rylandgrounds/Development/projects/final_project/final-project-frontend/src/features/ArticleCard/articlesSlice.js";
import { Link } from "react-router-dom";

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
  debugger;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={``} title="Article" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like the Article!
        </Button>
      </CardActions>
    </Card>
  );
}
