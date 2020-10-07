import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ArticleCard from "./ArticleCard.js";
import {useSelector} from "react-redux";

export default function ArticleContainer() {
    const articles = useSelector((state) => state.articles);
    if (!articles) {
        return <div>Loading...</div>;
      }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Grid container spacing={10} style={{ padding: "24px" }}>
            {articles.map((article) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={3}
              key={Math.random()}
            >
            <ArticleCard article={article} />
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
