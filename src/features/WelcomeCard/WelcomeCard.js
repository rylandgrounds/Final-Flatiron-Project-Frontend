
import ContractButtons from './ContractButtons.js'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
  
  },
  media: {
    height: 600,
    with: '100%'
  },
});

export default function WelcomeCard() {
  const classes = useStyles();

  return (
    <Card alignItems="center" width="100%" className={classes.root}>
      <CardActionArea>
        <CardMedia
        width="100%"
          className={classes.media}
          image="https://mondrian.mashable.com/wp-content%252Fuploads%252F2014%252F02%252Fhouse-of-cards-door-swing.gif%252Ffull-fit-in__950x534.gif?signature=7jLAgayLSYzTjgK_0qA_tSKSSMg=&source=http%3A%2F%2Fmashable.com"
          title="Here We Go Again"
        />
        <CardContent>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ContractButtons alignItems="center"/>
      </CardActions>
    </Card>
  );
}