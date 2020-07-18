import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LogoCenter from '../components/common/LogoCenter';
import ResendEmail from '../components/common/ResendEmail'
import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100vh',
        backgroundImage: 'linear-gradient(to right, #87D4D6 50%, white 50%)',
    },
    logopaper: {
        paddingLeft: '20px',
        paddingRight: '20px',
        padding: theme.spacing(0),
        boxShadow: 'none',
        width: '300px',
        backgroundColor: 'transparent',
        marginTop: '50px',
        textAlign: 'center',
    },
    paper: {
        paddingLeft: '20px',
        boxShadow: 'none',
        paddingRight: '20px',
        width: '300px',
        textAlign: 'center',
    },
    papercard: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '30px',
        marginTop: '20px',
        paddingBottom: '30px',
        textAlign: 'center',
        width: '300px',
        backgroundColor: 'white',
        borderRadius: "8px",
        boxShadow: '10px 10px 40px #A1A1A1',
    },
    title: {
        fontWeight: '400',
    },
    info: {
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: 'justify',
        color: '#9F9F9F',
        float: 'left',
        marginTop: '10px',
    },
    undrawemail: {
        width: '150px',
        marginBottom: '10px',
    },
    button: {
        marginTop: '10px',
        textTransform: 'initial',
        padding: theme.spacing(1, 0),
    }
}));

export default function PasswordReset() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <Paper className={classes.logopaper}>
                        <LogoCenter />
                    </Paper>
                </Grid>
                <Grid item >
                    <div className={classes.papercard}>
                        <img src={assets.undrawemail} className={classes.undrawemail} alt="sorry" />
                        <Typography component="h1" className={classes.title} variant="h3">
                            Check Email
                        </Typography>
                        <Typography component="h1" variant="subtitle1" className={classes.info} >
                            <span>Please check your email inbox and click on the provided link to reset your password. If you didn't recive email.
                            <ResendEmail resend="Click here to resend." />
                            </span>
                        </Typography>
                        <Button
                            type="button"
                            color="primary"
                            className={classes.button}
                        >
                            {'<'} Back to Sign up
                            </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

