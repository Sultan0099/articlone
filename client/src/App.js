import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import queryString from "query-string";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CheckEmail from './pages/CheckEmail';
import CreateProfile from './pages/CreateProfile'
import PasswordReset from './pages/PasswordReset';
import ResetLink from './pages/ResetLink';
import Dashboard from "./pages/Dashboard";
import VerifyEmail from './pages/VerifyEmail';
import PageNotFound from "./pages/PageNotFound";
import ServerError from "./pages/ServerError";
import Loading from './pages/Loading';
import Overview from './pages/Overview';
import WentWrong from './pages/WentWrong';
import CreateProject from './pages/CreateProject'

import AuthRoute from "./components/HOCs/AuthRoute";
import GuestRoute from "./components/HOCs/GuestRoute";

import { getUserByToken } from './redux/_actions/authAction';
import UserDashboard from './pages/UserDashboard';


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
      contrastText: '#3F3F3F',
    },
    text: {
      primary: '#242424',
      secondary: '#3F3F3F',
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
        setTimeout(() => setLoading(false), 2000)

      } else {
        const query = queryString.parse(window.location.search);
        if (query.token) {
          await dispatch(getUserByToken(query.token));
          localStorage.setItem('secret', query.token);
          setTimeout(() => setLoading(false), 2000)

        }
        setTimeout(() => setLoading(false), 2000)

      }
    }
    setUserToStore();
  }, [dispatch])
  // TODO loading page with animations


  return (
    <Router>
      <ThemeProvider theme={theme}>
        {loading ? <Loading /> :
          <Switch>
            <GuestRoute path="/" exact Component={Home} />
            <GuestRoute path="/login" exact Component={Login} />
            <GuestRoute path="/signup" exact Component={Signup} />
            <GuestRoute path="/signup/check_email/:email" exact Component={CheckEmail} />
            <GuestRoute path="/password_reset" exact Component={PasswordReset} />
            <GuestRoute path="/reset-password/:token" exact Component={ResetLink} />
            <GuestRoute path="/verify-email/:token" exact Component={VerifyEmail} />
            <GuestRoute path="/username" Component={UserDashboard} />
            <AuthRoute path="/dashboard" exact Component={Dashboard} />
            <AuthRoute path="/create-profile" Component={CreateProfile} />
            <Route path="/something-went-wrong" exact component={WentWrong} />
            <Route path="/server-error" component={ServerError} />
            <Route path="/loading" component={Loading} />
            <Route component={PageNotFound} />
          </Switch>
        }

      </ThemeProvider>
    </Router>
  );
}

export default App;
