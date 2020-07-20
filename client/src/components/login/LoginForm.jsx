import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from "@material-ui/core/colors";

import { useDispatch } from "react-redux"

import FacebookButton from "../common/FacebookButton";
import GoogleButton from "../common/GoogleButton";
import InputError from "../common/FormFieldError";

import validate from "./validate";
import useForm from "../../hooks/useForm";
import { login } from "../../redux/_actions/authAction"

export default function SignIn(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const submit = () => loginUser();

  const { handleChange, handleSubmit, handleBlur, values, errors, isSubmitting } = useForm({
    usernameOrEmail: '',
    password: '',
  }, submit, validate);

  const loginUser = async () => {
    await dispatch(login(values, history));
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid item xs={12} style={{ marginTop: "0px", marginBottom: '0px', paddingTop: "0px" }}>
            <Paper className={classes.paper} style={{ textAlign: 'center', paddingLeft: '0px', boxShadow: 'none', paddingRight: '0px', paddingTop: "0px", paddingBottom: "0px" }}>
              <GoogleButton title="Sign in with Google" />
              <FacebookButton title="Sign in with Facebook" />
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "0px", marginBottom: '0px' }}>
            <Paper className={classes.paper} style={{ textAlign: 'center', marginTop: '30px', padding: '0px', boxShadow: 'none' }}>
              <Typography component="h1" variant="subtitle1">
                or sign in with email
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D', marginTop: '30px' }}>
              <TextField
                variant="filled"
                margin="normal"
                color='primary'
                required
                fullWidth
                style={{ marginTop: '0px', marginBottom: '0px' }}
                size="small"
                label="Username Or Email "
                name="usernameOrEmail"
                error={errors.usernameOrEmail ? true : false}
                value={values.usernameOrEmail}
                onChange={handleChange}
                onBlur={handleBlur}

              />
            </Paper>
            {errors.usernameOrEmail && <InputError errorText={errors.usernameOrEmail} />}

          </Grid>
          <Grid item xs={12} style={{ marginTop: "30px" }}>
            <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D' }}>
              <TextField
                variant="filled"
                style={{ marginTop: '0px', marginBottom: '0px' }}
                margin="normal"
                size='small'
                required
                fullWidth
                name="password"
                error={errors.password ? true : false}
                value={values.password}
                label="Password"
                type="password"
                autoComplete="password"
                onChange={handleChange}

              />
            </Paper>
            {errors.password && <InputError errorText={errors.password} />}


          </Grid>
          <FormControlLabel
            style={{ marginTop: '8px' }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <div className={classes.wrapper}>
            <Button
              type="button"
              onClick={handleSubmit}
              fullWidth
              disabled={isSubmitting}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
          <Grid container>
            <Grid item xs>
              <Link to="/password_reset" style={{ color: "#4C797B" }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" style={{ color: "#4C797B" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
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
  form: {
    width: '90%',
    marginTop: theme.spacing(1),
  },
  submit: {
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(2, 0, 2),
  },
}));
