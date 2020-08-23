import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './css/home.css'
import Header from '../components/Landing/Header';
import Banner from '../components/Landing/Banner';
import CardDetail from '../components/Landing/CardDetail';

const useStyles = makeStyles((theme) => ({

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  console.log("home", 'render')
  return (
    <div className={classes.root}>
      <Header />
      <div>

        <CardDetail />
      </div>
    </div>
  );
}


