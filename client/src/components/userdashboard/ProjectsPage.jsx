import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        paddingTop:'10vh',
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    cardGrid2: {
        backgroundColor: 'offwhite',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    rounded: {
        backgroundColor: 'black',
        marginTop: '30px',
        marginBottom: '15px',
        width: '50px',
        height: '50px',
    },
    container1: {
        marginTop:'5vh',
    },
    card: {
        height: '100%',
        alignItems: 'center',
        cursor:'pointer',
        width: '150px',
        display: 'flex',
        flexDirection: 'column',
    },
    icon: {
        width: '80px',
        marginTop: '30px',
        height: '80px',
        color: '#24C6A6',
    },
    title: {
        marginLeft:'20px'
    },
    heading: {
        textDecoration:'none',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        textAlign: ' center',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3];

export default function ProjectsPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm" className={classes.container1}>
                        <Typography component="h1" className={classes.title} variant="h4" align="left" color="textPrimary" gutterBottom>
                            My projects
                        </Typography>
                        <Container className={classes.cardGrid} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={8}>
                                {cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <Avatar variant='rounded' className={classes.rounded}>
                                                Pr
                                            </Avatar>
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5"  component="h2">
                                                    Project Name
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                        <Typography component="h1" className={classes.title} variant="h4" align="left" color="textPrimary" gutterBottom>
                            Create new projects
                        </Typography>
                        <Container className={classes.cardGrid2} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className={classes.card} component={Link} to='/username/create-project'>
                                        <AddCircleOutlineIcon className={classes.icon} />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom className={classes.heading} variant="h5" component="h2">
                                                Create New Project
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <Avatar variant='rounded' className={classes.rounded}>
                                            Pr
                                        </Avatar>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Blog Starter Template
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <Avatar variant='rounded' className={classes.rounded}>
                                            Pr
                                        </Avatar>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                News Article Template
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Articlone
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Copyright 2020
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}