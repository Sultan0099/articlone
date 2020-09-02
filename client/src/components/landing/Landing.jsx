import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:'80px',
    height:'100vh',
    // height: '555px',
    backgroundImage: `url(${assets.background})`,
    backgroundSize:'cover',
  },
  paper: {
    background:'transparent',
    boxShadow:'none',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <Typography variant="h1" >
                  All your content one AI call away
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>side image</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
