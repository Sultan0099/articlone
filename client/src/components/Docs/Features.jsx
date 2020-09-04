import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LineStyleOutlinedIcon from '@material-ui/icons/LineStyleOutlined';
import TimelapseOutlinedIcon from '@material-ui/icons/TimelapseOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'pink',
    },
    container: {
        backgroundColor: '#ffffff',
    },
    toolbar: theme.mixins.toolbar,
    contentpaper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: 'auto',
        marginLeft: '240px',
        boxSizing: 'border-box',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '0px',
        },
        [theme.breakpoints.down("850")]: {
            width: '100%',
        },
    },
    mainheading: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '46px',
        color: '#075A5D',
        fontWeight: '800',
    },
    heading: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '38px',
        color: '#075A5D',
        fontWeight: '800',
    },
    icons: {
        fontSize: '50px',
    },
    title: {
        fontSize: '28px',
        color: '#075A5D',
        fontWeight: '700',
    },
    paragraph: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '18px',
        color: '#292929',
        fontWeight: '200',
    },
    text: {
        fontSize: '18px',
        color: '#292929',
        fontWeight: '200',
    },
    cardsflex: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: 'auto',
        marginLeft: '240px',
        boxSizing: 'border-box',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '0px',
        },
        [theme.breakpoints.down("850")]: {
            width: '100%',
        },
    },
    cardsgrid: {
        marginTop: '50px',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        marginBottom: '90px',
    },
    paper2: {
        width: 250,
        height: 325,
        paddingBottom: '10px',
        [theme.breakpoints.down("750")]: {
            width: '70vw',
            height: 'auto'
        },
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#EDF3F3"
    },
}));

export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container spacing={0} className={classes.container} >
                <Grid item xs={12} sm={12} >
                    <div className={classes.contentpaper}>
                        <Typography component='h2' variant='h2' className={classes.mainheading} >
                            Articlone Features
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            In API Reference you will get to know which API you need to select for your site or what isthe purpose of every API. You just need to add API key in link.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            There are several available APIs when working with Articlone.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={10} >
                    <div className={classes.cardsflex} >
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            Technical
                        </Typography>
                        <Grid container className={classes.cardsgrid} spacing={0}>
                            <Grid item xs={12}>
                                <Grid container justify="space-between" alignItems="center" spacing={6}>
                                    <Grid item>
                                        <div className={classes.paper2}>
                                            <AccountTreeOutlinedIcon color="primary" className={classes.icons} />
                                            <Typography variant="h4" className={classes.title}>
                                                Multi Projects Handling
                                            </Typography>
                                            <Typography
                                                component="h6"
                                                variant="h6"
                                                className={classes.text}
                                            >
                                                Empower your development and editorial teams' workflows and bring your digital projects to life with Articlone.
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div className={classes.paper2}>
                                            <LineStyleOutlinedIcon color="primary" className={classes.icons} />
                                            <Typography variant="h4" className={classes.title}>
                                                Rich Text Editor
                                            </Typography>
                                            <Typography
                                                component="h6"
                                                variant="h6"
                                                style={{marginTop: '30px'}}
                                                className={classes.text}
                                            >
                                                You can write an amazing article using our editor where you also can add images or videos to your article.
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div className={classes.paper2}>
                                            <TimelapseOutlinedIcon color="primary" className={classes.icons} />
                                            <Typography variant="h4" className={classes.title}>
                                                Time Saving
                                            </Typography>
                                            <Typography
                                                component="h6"
                                                variant="h6"
                                                style={{marginTop: '30px'}}
                                                className={classes.text}
                                            >
                                                Deliver the perfect Customer Experience within time. It is less time consuming and provides the better approach to your goals.
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
