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
    const profile = useSelector(state => state.profile.profile)
    return (
        <AppBar className={classes.header} position="fixed" color="default">
            <Toolbar className={classes.h_toolbar}>
                <img src={assets.loading} alt="Articlone Logo" className={classes.h_logo} />
                <Avatar variant="rounded" className={classes.avatar}>
                    {profile && profile.profileImg ? (
                        <img src={profile.profileImg} alt="articlone profile img " style={{ width: "100%", height: "100%" }} />
                    ) : user.username.substring(0, 2).toUpperCase()}

                </Avatar>
            </Toolbar>
        </AppBar>
    );
}