import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        backgroundColor: '#ffffff',
    },
    toolbar: theme.mixins.toolbar,
    contentpaper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        width: '70%',
        backgroundColor: '#ffffff',
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
    form: {
        width: '100%',
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
    send: {
        marginTop: '3vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        marginBottom: '10vh',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '16px',
        textTransform: 'initial',
        padding: theme.spacing(1, 2, 0.5, 2),
    },
    paperfield: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        boxSizing: 'border-box',
        paddingLeft: '0px',
        paddingRight: '0px',
        marginBottom: '30px',
    },
    textfield: {
        marginTop: '0px',
        marginBottom: '0px',
    },
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container spacing={0} className={classes.container} >
                <Grid item xs={12} sm={12} >
                    <div className={classes.contentpaper} >
                        <Typography component="h1" variant="h1" className={classes.mainheading} >
                            Contact Us
                        </Typography>
                        <div className="form">
                            <Typography component="h3" variant="h3" className={classes.title} >
                                Talk to an expert
                            </Typography>
                            <Typography paragraph className={classes.paragraph} >
                                If you’re a content creator, developer, or digital-first team looking to build your next project with a modern API-first CMS, we're looking forward to speaking with you.
                            </Typography>
                            <div className={classes.paperfield}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    className={classes.textfield}
                                    required
                                    fullWidth
                                    size="small"
                                    label="Full Name"
                                    name="fullname"
                                    autoComplete="fullname"
                                />
                            </div>
                            <div className={classes.paperfield}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    className={classes.textfield}
                                    required
                                    fullWidth
                                    size="small"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </div>
                            <div className={classes.paperfield}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    className={classes.textfield}
                                    required
                                    fullWidth
                                    size="small"
                                    label="Subject"
                                    name="subject"
                                    autoComplete="subject"
                                />
                            </div>
                            <div className={classes.paperfield}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    multiline={true}
                                    rows={3}
                                    color='primary'
                                    className={classes.textfield}
                                    required
                                    fullWidth
                                    size="small"
                                    label="Message"
                                    name="message"
                                    autoComplete="message"
                                />
                            </div>
                            <Button variant="contained" color="primary" className={classes.send} >
                                Send Message
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}
