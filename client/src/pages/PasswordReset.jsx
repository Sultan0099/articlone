import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LogoCenter from '../components/LogoCenter';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100%',
        backgroundColor: 'white',
    },
    logopaper: {
        paddingLeft: '20px',
        paddingRight: '20px',
        padding: theme.spacing(0),
        boxShadow: 'none',
        width: '300px',
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
        textAlign: 'justify',
        width: '330px',
        borderRadius:"4px",
        border: '1px solid #92B6B8',
        boxShadow: 'none',
    },
    paperfield: {
        boxShadow: '0px 1px 0px 0.1px #075A5D', 
        boxSizing: 'border-box', 
        paddingLeft: '0px', 
        paddingRight: '0px', 
        marginTop: '30px', 
        // width:'22vw',
        marginBottom: '30px',
    },
    textfield: {
        marginTop:'0px',
        marginBottom:'0px',
    },
    submit: {
        textTransform: 'initial',
        padding: theme.spacing(1, 0),
    }
}));

export default function PasswordReset() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item>
                    <Paper className={classes.logopaper}>
                        <LogoCenter />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h3">
                            Reset your password
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <div className={classes.papercard}>
                        <Typography component="h1" variant="subtitle2" >
                            Enter your user account's verified email address and we will send you a password reset link.
                        </Typography>
                        <Paper className={classes.paperfield}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                color='primary'
                                className={classes.textfield}
                                required
                                fullWidth
                                size="small"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Paper>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Send password reset email
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

