import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import LogoWhite from '../common/LogoWhite'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor:'white',
      boxShadow:'none',
      width:'100%',
      border:'1px solid #E7E7E7',
      alignItems:'center',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBars() {
  const classes = useStyles();
  console.log("home", 'render')
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <LogoWhite />
        </Toolbar>
      </AppBar>
    </div>
  );
}