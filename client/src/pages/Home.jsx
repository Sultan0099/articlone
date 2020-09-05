import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AppBar from '../components/landing/AppBar'
import Content from '../components/landing/Content'
import Footer from '../components/landing/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#EDF3F3',
  },
  appbar: {
    backgroundColor: 'white',
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
  console.log("home", 'render')
  return (
    <div className={classes.root}>
      <AppBar />
      <Content />
      <Footer />
    </div>
  );
}

