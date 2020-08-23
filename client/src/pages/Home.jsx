import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD

import './css/home.css'
import Header from '../components/Landing/Header';
import Banner from '../components/Landing/Banner';
import CardDetail from '../components/Landing/CardDetail';

const useStyles = makeStyles((theme) => ({

=======
import Button from '@material-ui/core/Button';

import AppBar from '../components/landing/AppBar'
import Content from '../components/landing/Content'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  appbar: {
    backgroundColor:'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
>>>>>>> 58e8ddd2a84905cbb7301f51000027b09488f88d
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  console.log("home", 'render')
  return (
    <div className={classes.root}>
<<<<<<< HEAD
      <Header />
      <div>

        <CardDetail />
      </div>
=======
      <AppBar />
      <Content />
>>>>>>> 58e8ddd2a84905cbb7301f51000027b09488f88d
    </div>
  );
}


<<<<<<< HEAD
=======




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import LogoWhite from '../components/common/LogoWhite'
// // import {theme as myTheme} from '../muitheme'
// import './css/home.css'
// import { Link } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     // backgroundColor : theme.secondary
//   },
//   appbar: {
//     backgroundColor:'white',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();
//   console.log("home", 'render')
//   return (
//     <div className={classes.root}>
//       <AppBar position="static" className={classes.appbar}>
//         <Toolbar>
//           <LogoWhite />
//           <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
//             <Button color="secondary">
//               Login
//             </Button>
//           </Link>
//           <Button component={Link} to='/dashboard'> Dashboard </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
>>>>>>> 58e8ddd2a84905cbb7301f51000027b09488f88d
