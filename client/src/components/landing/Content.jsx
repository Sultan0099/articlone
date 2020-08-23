// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// import { assets } from '../../theme'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         height: '100vh',
//         width: '100vw',
//         overflow: 'hidden',
//         // backgroundImage: "linear-gradient(green, orange, #FFFFFF)",
//         backgroundImage: "linear-gradient(#EDF3F3, #EDF3F3, #EDF3F3, #FFFFFF)",
//     },
//     paper1: {
//         paddingTop: '70px',
//         marginLeft: '10vw',
//         padding: theme.spacing(0),
//         textAlign: 'left',
//         color: theme.palette.text.secondary,
//     },
//     heading: {
//         fontSize: '54px',
//         marginTop: '12vh',
//         fontWeight:'700',
//     },
//     text: {
//         fontSize: '28px',
//         marginTop: '20px',
//     },
//     getstarted: {
//         marginTop: '50px',
//         textTransform: 'capitalize',
//     },
//     paper2: {
//         textAlign: 'left',
//         height: `calc(92vh)`,
//         backgroundImage: `url(${assets.testworking})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         marginTop: '70px',
//         width: '50vw',
//         color: theme.palette.text.secondary,
//     },
// }));

// export default function FullWidthGrid() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={0}>
//                 <Grid item xs={12} sm={6}>
//                     <div className={classes.paper1}>
//                         <Typography component='h1' variant='h2' className={classes.heading} >
//                             All Your Content. <br />
//                             One API Call Away.
//                         </Typography>
//                         <Typography component='h3' variant='h3' className={classes.text} >
//                             The platform where you can manage <br/>
//                             your content and get API for <br/>
//                             blogging site.
//                         </Typography>
//                         <Button color="primary" variant="contained" className={classes.getstarted} >Get Started</Button>
//                     </div>
//                 </Grid>
//                 <Grid item xs={12} sm={6} className={classes.rightgrid} >
//                     <div className={classes.paper2}>
//                     </div>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }






























import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FirstBox from '../landing/FirstBox';
import SecondBox from '../landing/SecondBox';
import ThirdBox from '../landing/ThirdBox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        overflowX: 'hidden',
        flexDirection: 'column',
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FirstBox />
            <SecondBox />
            <ThirdBox />
        </div>
    );
}
