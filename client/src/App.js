import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PasswordReset from './pages/PasswordReset'
import ResetLink from './pages/ResetLink'

const theme = createMuiTheme({
  palette: {
      primary: {
        main:'#075A5D',
        dark:'#07485D',
      },
      secondary: {
        main: '#87D4D6',
        light:"#18A1E8",
        dark:"#3D60A7",
        contrastText:'#fff',
      },
      text: {
        primary: '#242424',
        secondary: '#242424',
      },
  },
  typography: {
    h1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'32px',
      fontWeight:'500',
      color:'#242424',
    },
    h2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'30px',
      fontWeight:'500',
      color:'#075A5D',
    },
    h3: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'24px',
      fontWeight:'100',
      color:'#242424',
    },
    h4: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'22px',
      fontWeight:'500',
      color:'#075A5D',
    },
    h5: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'18px',
      fontWeight:'500',
      color:'#075A5D',
    },
    h6: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'16px',
      fontWeight:'500',
      color:'#075A5D',
    },
    title1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'48px',
      fontWeight:'500',
      color:'#242424',
    },
    title2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'42px',
      fontWeight:'100',
      color:'#242424',
    },
    subtitle1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'16px',
      color:'#9F9F9F',
    },
    subtitle2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize:'14px',
      color:'#242424',
    },
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" theme={theme} component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/password_reset" exact component={PasswordReset} />
            <Route path="/password_reset/link" component={ResetLink} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
