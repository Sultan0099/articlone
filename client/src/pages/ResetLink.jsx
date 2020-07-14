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
        flexGrow: 0,
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
        width: '300px',
        border: '1px solid #92B6B8',
        boxShadow: 'none',
    },
    submit: {
        textTransform: 'initial',
        marginTop:'20px',
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
                            Change password for @user
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.papercard}>
                        <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D', boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', marginTop: '0px', marginBottom: '30px', }}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                id="password"
                                label="password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                            />
                        </Paper>
                        <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D', boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', marginTop: '30px', marginBottom: '30px', }}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                id="confirmPassword"
                                label="Confirm Password"
                                name="ConfirmPassword"
                                autoComplete="ConfirmPassword"
                                autoFocus
                            />
                        </Paper>
                        <Typography component="h1" variant="subtitle2" >
                            Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Change password
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

