import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { assets } from '../../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        width: '100%',
        backgroundColor: "transparent",
        boxShadow: 'none',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
            textAlign: 'center',
        },
    },
    logo: {
        marginTop: '0px',
        marginLeft: '4%',
        width: '180px',
        marginBottom: '0px',
        height: '54px',
        [theme.breakpoints.down('xs')]: {
            width: '150px',
            height: '44px',
            marginTop: '10px'
        },
    },
}));


export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <img src={assets.logo} className={classes.logo} alt="Sorry!" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}








// import React from 'react'
// import {assets} from '../../theme';
// import './css/logogreen.css'

// function Logo() {
//     return (
//         <div className="logo">
//             <img src={assets.logo} alt="Sorry!"/>
//         </div>
//     )
// }

// export default Logo
