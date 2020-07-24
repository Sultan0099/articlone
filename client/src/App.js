import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import queryString from "query-string";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CheckEmail from './pages/CheckEmail';
import PasswordReset from './pages/PasswordReset';
import ResetLink from './pages/ResetLink';
import Dashboard from "./pages/Dashboard";
import VerifyEmail from './pages/VerifyEmail';
import PageNotFound from "./pages/PageNotFound";
import ServerError from "./pages/ServerError";
import Loading from './pages/Loading';
import WentWrong from './pages/WentWrong';

import AuthRoute from "./components/HOCs/AuthRoute";
import GuestRoute from "./components/HOCs/GuestRoute";

import { getUserByToken } from './redux/_actions/authAction';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#075A5D',
      dark: '#07485D',
    },
    secondary: {
      main: '#87D4D6',
      light: "#18A1E8",
      dark: "#3D60A7",
      contrastText: '#fff',
    },
    text: {
      primary: '#242424',
      secondary: '#242424',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '32px',
      fontWeight: '500',
      color: '#242424',
    },
    h2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '30px',
      fontWeight: '500',
      color: '#075A5D',
    },
    h3: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '24px',
      fontWeight: '100',
      color: '#242424',
    },
    h4: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '22px',
      fontWeight: '500',
      color: '#075A5D',
    },
    h5: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '18px',
      fontWeight: '500',
      color: '#075A5D',
    },
    h6: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '16px',
      fontWeight: '500',
      color: '#075A5D',
    },
    title1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '48px',
      fontWeight: '500',
      color: '#242424',
    },
    title2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '42px',
      fontWeight: '100',
      color: '#242424',
    },
    subtitle1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '16px',
      color: '#9F9F9F',
    },
    subtitle2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: '14px',
      color: '#242424',
    },
  }
})

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    async function setUserToStore() {
      const token = localStorage.getItem('secret');

      if (token) {
        await dispatch(getUserByToken(token))
        setLoading(false)
      } else {
        const query = queryString.parse(window.location.search);
        if (query.token) {
          await dispatch(getUserByToken(query.token));
          localStorage.setItem('secret', query.token);
          setLoading(false);
        }
        setLoading(false)
      }
    }
    setUserToStore();
  }, [dispatch])
  // TODO loading page with animations
  if (loading) { return <Loading /> }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <GuestRoute path="/" exact Component={Home} />
          <GuestRoute path="/login" exact Component={Login} />
          <GuestRoute path="/signup" exact Component={Signup} />
          <GuestRoute path="/signup/check_email/:email" exact Component={CheckEmail} />
          <GuestRoute path="/password_reset" exact Component={PasswordReset} />
          <GuestRoute path="/reset-password/:token" exact Component={ResetLink} />
          <GuestRoute path="/verify-email/:token" exact Component={VerifyEmail} />
          <AuthRoute path="/dashboard" exact Component={Dashboard} />
          <GuestRoute Component={PageNotFound} />
          <GuestRoute Component={WentWrong} />
          <GuestRoute Component={ServerError} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
