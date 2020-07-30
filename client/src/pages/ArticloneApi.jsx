import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";


import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    marginLeft: '-30px',
    height: '100vh',
  },
  papercard: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '13vh',
    marginTop: '20px',
    paddingBottom: '30px',
    textAlign: 'center',
    width: '37vw',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    borderRadius: "8px",
  },
  title: {
    fontWeight: '600',
    fontSize: "32px",
    marginBottom: '30px',
  },
  title2: {
    fontWeight: '400',
    fontSize: "26px",
    marginBottom: '30px',
  },
  info: {
    fontSize: '18px',
    marginLeft: '10px',
    marginRight: '10px',
    textAlign: 'center',
    color: '#808080',
    float: 'left',
    marginTop: '10px',
  },
  model: {
    width: '300px',
    marginBottom: '10px',
  },
}));

export default function ArticloneApi() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" >
        <Grid item >
          <div className={classes.papercard}>
            <Typography component="h1" className={classes.title} variant="h4">
              Articlone API
            </Typography>
            <img src={assets.model} className={classes.model} alt="sorry" />
            <Typography className={classes.title2} variant="h3">
              Create Model to get started
            </Typography>
            <Button component={Link} to="/" type="button" variant="contained" color="primary">+ Create Model</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
