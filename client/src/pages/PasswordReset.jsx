import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from "@material-ui/core/colors";

import axios from 'axios';

import LogoCenter from '../components/common/LogoCenter';
import InputError from '../components/common/FormFieldError';

export default function PasswordReset() {
    const classes = useStyles();
    const [usernameOrEmail, setUsernameOrEmail] = useState(null);
    const [err, setErr] = useState(null);
    const [success, setSuccess] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { value } = e.target;
        setUsernameOrEmail(value);
    }

    const handleClick = async () => {
        try {
            setErr(null)
            setIsSubmitting(true)
            await axios.post('/api/v1/forget-password', { usernameOrEmail })
            setIsSubmitting(false)
            setSuccess("Please Check you Email");

        } catch (err) {
            // TODO show red animated box for error 

            setErr(err.response.data.error.message)
            setIsSubmitting(false)
        }
    }

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
                                label="Username or Email"
                                name="usernameOrEmail"
                                autoComplete="usernameOrEmail"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Paper>
                        {err && <InputError errorText={err} />}
                        {success && <p style={{ color: 'green', marginTop: '2px' }}> {success} </p>}
                        <div className={classes.wrapper}>
                            <Button
                                type="button"
                                onClick={handleClick}
                                fullWidth
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                            {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100%',
        backgroundColor: 'white',
    },
    wrapper: {

        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
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
        borderRadius: "4px",
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
        marginTop: '0px',
        marginBottom: '0px',
    },
    submit: {
        textTransform: 'initial',
        padding: theme.spacing(1, 0),
    }
}));
