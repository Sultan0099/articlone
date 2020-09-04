import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
        [theme.breakpoints.up("md")]: {
            height: 'auto',
        },
        [theme.breakpoints.down("md")]: {
            height: 'auto',
        },
        [theme.breakpoints.down("sm")]: {
            height: 'auto',
        },
        overflow: 'hidden',
        backgroundImage: "linear-gradient(#EDF3F3, #EDF3F3, #EDF3F3, #FFFFFF)",
    },
    paper1: {
        paddingTop: '70px',
        marginLeft: '10vw',
        padding: theme.spacing(0),
        textAlign: 'left',
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            marginLeft: '5vw',
            marginRight: '5vw',
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
            marginLeft: '5vw',
            marginRight: '5vw',
        },
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: '54px',
        marginTop: '12vh',
        fontWeight: '700',
        [theme.breakpoints.down("xs")]: {
            fontSize: '38px',
            marginTop: '8vh',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '44px',
        },
    },
    text: {
        fontSize: '28px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '22px',
        },
        [theme.breakpoints.down("380")]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '26px',
        },
        [theme.breakpoints.down("1005")]: {
            fontSize: '24px',
        },
        marginTop: '20px',
    },
    getstarted: {
        marginTop: '50px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '22px',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '24px',
        },
        [theme.breakpoints.down("1180")]: {
            fontSize: '20px',
        },
        textTransform: 'capitalize',
    },
    paper2: {
        textAlign: 'left',
        height: `calc(92vh)`,
        marginTop: '70px',
        width: '100%',
        color: theme.palette.text.secondary,
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
            display: 'block',
            height: 'auto',
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            height: 'auto',
        },
    },
    working: {
        marginTop: '10vh',
        width: '40vw',
        [theme.breakpoints.down("1080")]: {
            width: '45vw',
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: '0vh',
            marginLeft: '10vw',
            width: '80vw',
            marginRight: '10vw',
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '0vh',
            width: '60vw',
            marginLeft: '10vw',
            marginRight: '10vw',
        },
        [theme.breakpoints.down("480")]: {
            width: '80vw',
        },
        [theme.breakpoints.down("375")]: {
            width: '80vw',
        },
    },
    paper3: {
        textAlign: 'left',
        height: '92vh',
        marginTop: '70px',
        width: '100%',
        color: theme.palette.text.secondary,
        [theme.breakpoints.up("md")]: {
            backgroundImage: `url(${assets.testworking})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            height: '80vh',
            marginTop: '70px',
        },
        [theme.breakpoints.down("md")]: {
            marginTop: '12vh',
            height: '60vh',
        },
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },

    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} >
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.paper1}>
                        <Typography component='h1' variant='h2' className={classes.heading} >
                            All Your Content. <br />
                            One API Call Away.
                        </Typography>
                        <Typography component='h3' variant='h3' className={classes.text} >
                            The platform where you can manage <br />
                            your content and get API for <br />
                            blogging site.
                        </Typography>
                        <Button color="primary" variant="contained" className={classes.getstarted} >Get Started</Button>
                    </div>
                    <div className={classes.paper2}>
                        <img src={assets.working} alt="sorry!" className={classes.working} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.rightgrid} >
                    <div className={classes.paper3}>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
}