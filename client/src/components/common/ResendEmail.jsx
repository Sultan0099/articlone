import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    resend: {
        flexGrow: 1,
        boxShadow: 'none',
        backgroundColor: 'white',
    },
    linkpaper: {
        padding: theme.spacing(0),
        // backgroundColor:"orange",
        boxShadow: 'none',
        textAlign: 'center',
        width: '36vw',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        borderRadius: '0px',
        color: theme.palette.text.secondary,
    },
    resendbtn: {
        textTransform:'initial',
        textDecoration:"none",
        fontSize:"16px",
        marginTop:'15px',
        paddingLeft:'20px',
        paddingRight:"20px",
    },
}));

export default function ResendEmail({ handleClick, resend }) {
    const classes = useStyles();

    return (
        <div className={classes.resend}>
            <Grid container spacing={0}>
                <Grid item >
                    <Paper className={classes.linkpaper}>
                        <Button type="button" variant="contained" color="primary" className={classes.resendbtn} onClick={handleClick}>{ resend }</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
