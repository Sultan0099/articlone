import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        paddingLeft: '240px',
        backgroundColor: '#ffffff',
    },
    toolbar: theme.mixins.toolbar,
    contentpaper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: 'auto',
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
    paper: {
        cursor: 'pointer',
        marginTop: '2vh',
        marginBottom: '50px',
        borderRadius: '4px',
        backgroundColor: '#EDF3F3',
        marginLeft: '3vw',
        "&:hover": {
            boxShadow: '0px 10px 40px #BFC5C5',
        },
        paddingTop: '1vh',
        paddingBottom: '5vh',
        marginRight: '5vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
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
    title: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '28px',
        color: '#075A5D',
        fontWeight: '700',
    },
    text: {
        fontSize: '14px',
        color: '#6D6D6D',
        fontWeight: '400',
    },
}));

export default function DocsHome() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container spacing={0} className={classes.container} >
                <Grid item xs={12} >
                    <div className={classes.contentpaper}>
                        <Typography component='h2' variant='h2' className={classes.mainheading} >
                            Documentation
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Explore our guides, API reference, and a collection of code examples to get to grips with Articlone.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} >
                    <div className={classes.paper}>
                        <Typography variant="h4" className={classes.title}>
                            Get Started
                        </Typography>
                        <Typography
                            component="h6"
                            variant="h6"
                            className={classes.paragraph}
                        >
                            Follow along with the basics, and learn how to create a project, create a schema and publish your first content.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} >
                    <div className={classes.paper}>
                        <Typography variant="h4" className={classes.title}>
                            Key Concepts
                        </Typography>
                        <Typography
                            component="h6"
                            variant="h6"
                            className={classes.paragraph}
                        >
                            Key concepts of Articlone like Articlone & Developer Efficency, Content Management & Sharing and Article Reading & Growth.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} >
                    <div className={classes.paper}>
                        <Typography variant="h4" className={classes.title}>
                            API References
                        </Typography>
                        <Typography
                            component="h6"
                            variant="h6"
                            className={classes.paragraph}
                        >
                            Explore in detail all queries, mutations, filter and API possibilities when developing with Articlone.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} >
                    <div className={classes.paper} style={{ marginBottom: '130px' }} >
                        <Typography variant="h4" className={classes.title}>
                            Articlone CMS
                        </Typography>
                        <Typography
                            component="h6"
                            variant="h6"
                            className={classes.paragraph}
                        >
                            Learn, how to integrate API of your posts using all types of API's in your site using Articlone CMS according to the requirment.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
