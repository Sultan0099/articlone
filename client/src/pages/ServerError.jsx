import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useParams, Link } from "react-router-dom";
import axios from "axios";

import ResendEmail from '../components/common/ResendEmail'
import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
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
        fontSize:"36px",
        marginBottom:'10px',
    },
    info: {
        fontSize:'18px',
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: 'center',
        color: '#808080',
        float: 'left',
        marginTop: '10px',
    },
    server: {
        width: '380px',
        marginBottom: '10px',
    },
}));

export default function Server() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <div className={classes.papercard}>
                        <img src={assets.server} className={classes.server} alt="sorry" />
                        <Typography component="h1" className={classes.title} variant="h1">
                            502. That's an error!
                        </Typography>
                        <Typography component="h1" variant="subtitle1" className={classes.info} >
                            <span>The server encountered a temporary error and could not complete your request. That's all we know.</span>
                        </Typography>
                        <ResendEmail resend="Try again in 30 seconds" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

