import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../components/Docs/AppBar'
import GettingStarted from '../components/Docs/GettingStarted'
import Concepts from '../components/Docs/Concepts'
import ApiRef from '../components/Docs/ApiRef'
import Contact from '../components/Docs/Contact'
import ArticloneCMS from '../components/Docs/ArticloneCMS'
import Features from '../components/Docs/Features'
import DocsHome from '../components/Docs/DocsHome'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
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

export default function Documentation( props ) {
    const classes = useStyles();

    return (
        <div style = {{ position : 'relative'}}>
            <AppBar />
            <Switch>
                <Route path="/docs/" exact component={DocsHome} />
                <Route path="/docs/getting-started" exact component={GettingStarted} />
                <Route path="/docs/key-concepts" exact component={Concepts} />
                <Route path="/docs/api-ref" exact component={ApiRef} />
                <Route path="/docs/contact-us" exact component={Contact} />
                <Route path="/docs/articlone-cms" exact component={ArticloneCMS} />
                <Route path="/docs/Features" exact component={Features} />
            </Switch>
         </div>
    );
}