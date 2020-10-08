import React from 'react'
import Box from '@material-ui/core/Box';
import WelcomeCard from './WelcomeCard.js'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
   
    alignItemsAndJustifyContent: {
      width: 'fill',
      height: 'fill',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
  }))
  
export default function WelcomeBox() {
    const classes = useStyles()
  
    return (

        <Box className={classes.alignItemsAndJustifyContent} maxWidth="100%" width="100%" height="100%"> 
        <WelcomeCard/>
        </Box>
    )

}