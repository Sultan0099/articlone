import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'

import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100%',
        backgroundColor: 'white',
    },
    papercard: {
        textAlign: "center",
        marginTop: '22vh',
        position: 'fixed',
    },
    loading: {
        marginLeft: '155px',
        width: '120px',
    },
    papercard2: {
        marginTop: '40vh',
        textAlign: "center",
    },
    info: {
        color: 'gray',
    },
    title: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
        fontSize: '34px', 
        fontWeight: '600', 
        marginTop: '30px',
    },
}));

export default function PasswordReset() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item xs={12} sm={6}>
                    <div className={classes.papercard}>
                        <motion.img src={assets.loading} animate={{ width: '60px', transform: 'rotateZ(720deg)' }} transition={{ delay: 0.0, yoyo: Infinity, duration: 2 }} className={classes.loading} alt="sorry" />
                    </div>
                    <div className={classes.papercard2}>
                        <h1 className={classes.title}>Redirecting, please wait...</h1>
                        <p className={classes.info}>You will be redirected in a while!</p>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}

