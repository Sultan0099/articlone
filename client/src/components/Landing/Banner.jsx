import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { assets } from '../../theme'
const useStyles = makeStyles((theme) => ({
    root: {
    },
    banner: {

        position: 'relative',
        display: 'flex',
        // flexDirection: 'row',
        maxWidth: '80%',
        margin: '0px auto',
        marginTop: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        // padding: '100px',
        justifyContent: 'left',
        // backgroundColor: 'yellow',
        width: '42%',
    },
    heading1: {
        fontSize: 54,
        color: theme.palette.primary.main
    },
    heading2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.3)'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    console.log("home", 'render')
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <div className={classes.text}>
                    <h1 className={classes.heading1}>All Your Content. One API Call Away.</h1>
                    <h3 className={classes.heading2}>The platform where you can manage your content and get API for blogging site.</h3>
                    <Button variant="contained" color="primary" style={{ padding: "10px 20px", fontSize: 18 }} disableElevation  >Get Started</Button>
                </div>
                <div className={classes.image}>
                    <img src={assets.bannerImage} alt="Banner Image" />
                </div>
            </div>
        </div>
    );
}
