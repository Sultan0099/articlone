import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100vh',
        marginLeft:'-30px',
    },
    papercard: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '13vh',
        marginTop: '20px',
        paddingBottom: '30px',
        textAlign: 'center',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        borderRadius: "8px",
    },
    title: {
      fontWeight:'600',
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
    notfound: {
        width: '380px',
        marginBottom: '10px',
    },
    undrawsingle: {
      marginTop:'30px',
      width:'300px',
    },
    video: {
      width:'320px',
      height: '240px',
    }
}));

export default function Articles() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <div className={classes.papercard}>
                        <Typography component="h4" className={classes.title} variant="h2">
                          Published Articles
                        </Typography>
                        <img src={assets.undrawSingle} className={classes.undrawsingle} alt="sorry"/>
                        <Typography component="h1" className={classes.title} variant="h3">
                          You havn't published any articles yet
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

