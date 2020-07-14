import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeftGrid from '../components/login/LeftGrid';
import RightGrid from '../components/login/RightGrid';

const useStyles = makeStyles((theme) => ({
    login: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100%',
        backgroundColor: 'white',
    },
    leftpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        textAlign: 'center',
        height: '100vh',
        // borderRadius:'35% 8% 9% 57% / 0% 48% 52% 0%',
        [theme.breakpoints.down('xs')]: {
            // borderRadius:'35% 0% 48% 52% / 0% 26% 5% 4%',
            height:'50vh',
        },
        backgroundColor: '#9BD9DB',
        color: theme.palette.text.secondary,
    },
    rightpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        height:'100vh',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop:'-250px',
            height:'50vh',
            backgroundColor:"transparent",
        },
        borderRadius: '0px',
        color: theme.palette.text.secondary,
    },
    linkpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        textAlign: 'right',
        borderRadius: '0px',
        color: theme.palette.text.secondary,
    },
    formpaper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        textAlign: 'center',
        borderRadius: '0px',
        color: theme.palette.text.primary,
    },
    link: {
        cursor: 'pointer',
        textAlign: 'left',
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.login}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.leftpaper}>
                        <LeftGrid />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.rightpaper}>
                        <RightGrid />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
