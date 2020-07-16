import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import LogoWhite from '../components/common/LogoWhite'
// import {theme as myTheme} from '../muitheme'
import './css/home.css'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor : theme.secondary
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  useEffect(() => {
    fetch('/api/v1/check').then(res => res.text()).then(d => console.log(d))
  }, [])
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LogoWhite />
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// import React from 'react'
// import LogoWhite from '../components/login/LogoWhite'
// import './css/home.css'
// import { Link } from 'react-router-dom'

// function Home() {
//     return (
//         <div className="home">

//         </div>
//     )
// }

// export default Home
