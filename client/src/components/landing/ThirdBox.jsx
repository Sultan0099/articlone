import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#EDF3F3',

    },
    // paper1: {
    //     marginTop: '0px',
    //     textAlign: 'center',
    //     marginLeft: '8vw',
    //     color: theme.palette.text.secondary,
    // },
    docs: {
        marginTop: '50px',
        textTransform: 'capitalize',
    },
    heading: {
        fontSize: '40px',
        marginTop: '6vh',
        fontWeight: '600',
        color: '#075A5D',
    },
    text: {
        color: '#075A5D',
        fontSize: '22px',
        marginTop: '20px',
    },
    paper2: {
        paddingTop: '9vh',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    signup: {
        marginTop: '50px',
        textTransform: 'capitalize',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div className={classes.paper2}>
                        <Typography component='h1' variant='h2' className={classes.heading} >
                            All you need to do..
                        </Typography>
                        <Typography component='h3' variant='h3' className={classes.text} >
                            Freedom of expression and no templates or other nonsense. Build your digital products API-first <br />
                            and exactly how you envision them
                        </Typography>
                        <Button color="primary" variant="contained" className={classes.docs} >Check out docs</Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paper2}>
                        <Typography component='h1' variant='h2' className={classes.heading} >
                            Start for free, and scale as you go
                        </Typography>
                        <Typography component='h3' variant='h3' className={classes.text} >
                            Freedom of expression and no templates or other nonsense. Build your digital products API-first <br />
                            and exactly how you envision them
                        </Typography>
                        <Button color="primary" variant="contained" className={classes.signup} >Sign up for free</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
