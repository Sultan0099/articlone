import React from 'react';

import { Link } from 'react-router-dom';

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

import { register } from "../../redux/_actions/authAction"

import useForm from "../../hooks/useForm";
import validate from "./validate"


export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const submit = () => registerUser()


  const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }, submit, validate)

  const registerUser = async () => {
    await dispatch(register(values));
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid item xs={12} style={{ marginTop: "0px", marginBottom: '0px', paddingTop: "0px" }}>
            <Paper className={classes.paper} style={{ textAlign: 'center', paddingLeft: '0px', boxShadow: 'none', paddingRight: '0px', paddingTop: "0px", paddingBottom: "0px" }}>
              <GoogleButton title="Sign up with Google" />
              <FacebookButton title="Sign up with Facebook" />
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "0px", marginBottom: '0px' }}>
            <Paper className={classes.paper} style={{ textAlign: 'center', marginTop: '10px', padding: '0px', boxShadow: 'none' }}>
              <Typography component="h1" variant="subtitle1">
                OR
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} >
              <TextField
                variant="filled"
                margin="normal"
                color='primary'
                required
                fullWidth
                style={{ marginTop: '0px', marginBottom: '0px' }}
                size="small"
                label="username"
                name="username"
                autoComplete="username"
                error={errors.username ? true : false}
                value={values.username}
                onChange={handleChange}
              />
            </Paper>
            {errors.username && <InputError errorText={errors.username} />}

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} >
              <TextField
                variant="filled"
                margin="normal"
                color='primary'
                required
                fullWidth
                style={{ marginTop: '0px', marginBottom: '0px' }}
                size="small"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email ? true : false}
                value={values.email}
                onChange={handleChange}

              />
            </Paper>
            {errors.email && <InputError errorText={errors.email} />}


          </Grid>
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <Paper className={classes.paper}>
              <TextField
                variant="filled"
                style={{ marginTop: '0px', marginBottom: '0px' }}
                margin="normal"
                size='small'
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                error={errors.password ? true : false}

                value={values.password}
                onChange={handleChange}

              />
            </Paper>
            {errors.password && <InputError errorText={errors.password} />}


          </Grid>
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <Paper className={classes.paper}>
              <TextField
                variant="filled"
                style={{ marginTop: '0px', marginBottom: '0px' }}
                margin="normal"
                size='small'
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                error={errors.confirmPassword ? true : false}
                value={values.confirmPassword}
                onChange={handleChange}

              />
            </Paper>

            {errors.confirmPassword && <InputError errorText={errors.confirmPassword} />}

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
              Sign Up
          </Button>
            {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
          <Grid container>
            <Grid item>
              <Link to="/login" style={{ color: "#4C797B" }}>
                {"Already have an account? Sign In"}
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
    marginTop: '2vh',
  },
  submit: {
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(1, 0, 2),
  },

}));