import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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
        fontSize: "36px",
        marginBottom: '10px',
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
    wentwrong: {
        width: '280px',
        marginBottom: '10px',
    },
}));

export default function WentWrong() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <div className={classes.papercard}>
                        <img src={assets.wentwrong} className={classes.wentwrong} alt="sorry" />
                        <Typography component="h1" className={classes.title} variant="h1">
                            Oops, something went wrong!
                        </Typography>
                        <Typography component="h1" variant="subtitle1" className={classes.info} >

                            <span>Error may solve by refreshing the page and if it does not work try again later.</span>
                        </Typography>
                        <Button component={Link} to="/" type="button" variant="contained" color="primary">Come back in 30s </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

