import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SignupForm from './SignupForm'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        borderRadius: 'none',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            backgroundColor:"transparent",
        },
    },
    signin: {
        [theme.breakpoints.down('xs')]: {
            display:"none",
        },
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ textAlign: 'center', marginTop:'6%', marginBottom:'0px', paddingBottom:'0px' }}>
                        <Typography component="h1" className={classes.signin} variant="h1">
                            Sign up in Articlone
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ paddingTop: '0px' }}>
                        <SignupForm />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
