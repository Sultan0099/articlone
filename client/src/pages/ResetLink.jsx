import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LogoCenter from '../components/common/LogoCenter';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import InputError from '../components/common/FormFieldError';
import useForm from '../hooks/useForm';

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
        width: '300px',
        textAlign: 'center',
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        boxSizing: 'border-box',
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop: '30px',
        marginBottom: '10px',
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
        marginTop: '20px',
        padding: theme.spacing(1, 0),
    }
}));

const validate = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "Please Enter password";
    } else if (values.password.length < 8 || values.password.length > 15) {
        errors.password = "Password should between 8 to 20 character long";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Please Enter Confirm Password"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Confirm password must match to password '
    }
    return errors;
}

export default function ResetLink() {
    const classes = useStyles();
    const { token } = useParams();
    const history = useHistory();

    const submit = () => resetPassword();

    const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm({
        password: '',
        confirmPassword: ''
    }, submit, validate);

    const resetPassword = async () => {
        try {
            console.log(values);
            await axios.post('/api/v1/reset-password', { password: values.password, confirmPassword: values.confirmPassword, token }, {
                headers: {
                    'content-type': 'application/json'
                }
            })
            history.push('/login');
        } catch (err) {
            console.log({ err })
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
                    <Paper className={classes.papercard}>
                        <Paper className={classes.paper} >
                            <TextField
                                type="password"
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
                                value={values.password}
                                onChange={handleChange}
                            />
                        </Paper>
                        {errors.password && <InputError errorText={errors.password} />}
                        <Paper className={classes.paper} >
                            <TextField
                                type="password"
                                variant="filled"
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                id="confirmPassword"
                                label="Confirm Password"
                                name="confirmPassword"
                                autoComplete="confirmPassword"
                                autoFocus
                                value={values.confirmPassword}
                                onChange={handleChange}
                            />
                        </Paper>
                        {errors.confirmPassword && <InputError errorText={errors.confirmPassword} />}

                        <Typography component="h1" variant="subtitle2" >
                            Make sure it's at least 20 characters OR at least 8 characters including a number and a lowercase letter.
                        </Typography>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={isSubmitting}
                            onClick={handleSubmit}
                        >
                            Change password
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

