import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from '../components/dashboard/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import CreateProject from './CreateProject';
import ProjectsPage from '../components/userdashboard/ProjectsPage'

const useStyles = makeStyles((theme) => ({

}));

const cards = [1, 2, 3];

export default function UserDashboard() {
    const classes = useStyles();

    return (
        <Router>
            <React.Fragment>
                <CssBaseline />
                <AppBar />
                <Route path="/username" exact component={ProjectsPage} />
                <Route path="/username/create-project" component={CreateProject} />
            </React.Fragment>
        </Router>
    );
}