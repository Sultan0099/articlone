import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { assets } from '../theme'
import Drawer from '../components/dashboard/Drawer';
import FrontPage from '../components/dashboard/FrontPage';
import Overview from './Overview';
import NewArticle from './NewArticle';
import Articles from './Articles'
import Settings from './Settings';
import ArticloneApi from './ArticloneApi';
import Collaborate from './Collaborate';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "white",
    height: '100vh',
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Router>
        <Drawer />
        <Route path='/dashboard' exact component={FrontPage} />
        <Route path='/dashboard/overview' component={Overview} />
        <Route path='/dashboard/new-article' component={NewArticle} />
        <Route path='/dashboard/articles' component={Articles} />
        <Route path='/dashboard/settings' component={Settings} />
        <Route path='/dashboard/api' component={ArticloneApi} />
        <Route path='/dashboard/collaborate' component={Collaborate} />
      </Router>
    </div>
  );
}

export default withRouter(Dashboard);
