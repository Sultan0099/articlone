import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoginForm from './LoginForm'
// import LoginOption from './LoginOption'

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
                    <Paper className={classes.paper} style={{ textAlign: 'center', marginTop:'50px', marginBottom:'0px', paddingBottom:'0px' }}>
                        <Typography component="h1" className={classes.signin} variant="h1">
                            Sign in Articlone
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ paddingTop: '0px' }}>
                        <LoginForm />
                    </Paper>
                    {/* <Paper className={classes.paper} style={{ paddingTop: '0px' }}>
                        <LoginOption />
                    </Paper> */}
                </Grid>
            </Grid>
        </div>
    );
}
