import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

import { useSelector } from 'react-redux';

import collectionStyles from './styles';
import { assets } from "../../theme";


export default function Header(props) {
    const classes = collectionStyles();
    const user = useSelector(state => state.auth.user);
    return (
        <AppBar className={classes.header} position="fixed" color="default">
            <Toolbar className={classes.h_toolbar}>
                <img src={assets.loading} alt="Articlone Logo" className={classes.h_logo} />
                <Avatar variant="rounded" className={classes.avatar}> {user.username.substring(0, 2).toUpperCase()}</Avatar>
            </Toolbar>
        </AppBar>
    );
}