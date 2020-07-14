import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({ 
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'transparent',
    alignItems: 'center',
  },
  form: {
    width: '90%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    padding: theme.spacing(1.5, 0),
    textTransform:'initial',
    margin: theme.spacing(2, 0, 2),
  },
  googlesubmit: {
    padding: theme.spacing(1.5, 0),
    backgroundColor:'#18A1E8',
    color:'white',
    marginBottom:'20px',
    fontSize:'14px',
    textTransform:'initial'
},
facebooksubmit: {
    fontSize:'14px',
    padding: theme.spacing(1.5, 0),
    backgroundColor:'#3D60A7',
    color:'white',
    textTransform:'initial'
},
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid item xs={12} style={{ marginTop: "0px", marginBottom: '0px', paddingTop:"0px" }}>
            <Paper className={classes.paper} style={{ textAlign: 'center', paddingLeft: '0px', boxShadow:'none', paddingRight: '0px', paddingTop: "0px", paddingBottom: "0px" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.googlesubmit}
              >
                Sign In with Google
                <img src={assets.google} style={{ marginLeft: '10px' }} alt="Sorry!" />
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                className={classes.facebooksubmit}
              >
                Sign In with Facebook
                <img src={assets.facebook} alt="Sorry!" style={{ marginLeft: '10px' }} />
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submit}
              >
                Sign in with email
              </Button>
            </Paper>
          </Grid>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}