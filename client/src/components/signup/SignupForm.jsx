import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import FacebookButton from "../common/FacebookButton";
import GoogleButton from "../common/GoogleButton";



export default function SignIn() {
  const classes = useStyles();

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
            <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D', marginTop: '10px' }}>
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
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D', marginTop: '20px' }}>
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
              />
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <Paper className={classes.paper} style={{ boxShadow: '0px 1px 0px 0.1px #075A5D' }}>
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
              />
            </Paper>
          </Grid>
          <FormControlLabel
            style={{ marginTop: '8px' }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
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
  form: {
    width: '90%',
    marginTop: '2vh',
  },
  submit: {
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(1, 0, 2),
  },

}));