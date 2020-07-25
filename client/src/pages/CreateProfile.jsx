import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stepper from '../components/profile/Stepper'
import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: '0',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  },
  rightpaper: {
    height: "100vh",
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display:'none',
    },
    [theme.breakpoints.down('sm')]: {
      height: '40vh',
      marginTop:'20px',
    },
    textAlign: 'center',
    boxShadow: 'none',
    borderRadius: '0',
    color: theme.palette.text.secondary,
    backgroundColor: "#87D4D6",
  },
  profile: {
    marginTop: "100px",
    width: '300px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop:'80px',
      display:'none',
    },    

  },
  profile2: {
    display:'none',
    width:"200px",
    marginLeft:'30vw',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

export default function CreateProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <Stepper />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.rightpaper}>
            <img src={assets.profile} className={classes.profile} alt="sorry!" />
            <img src={assets.profile2} className={classes.profile2} alt="sorry!" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
