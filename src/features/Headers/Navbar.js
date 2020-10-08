import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to the Corona Country Spotlight!
          </Typography>
          <Button
        variant="contained"
        color="primary"
        size="large"
        href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
      >
        CDC Corona Page
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href='https://www.webmd.com/lung/coronavirus'
      >
        WebMd Corona Page
      </Button>
      <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/countries"
        >
            Country Statistics
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}