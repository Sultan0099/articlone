
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { assets } from '../../theme'
import Banner from './Banner'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    header: {
        // backgroundColor: '#EDF3F3',
        backgroundImage: "linear-gradient(to top, white, #EDF3F3)",
        height: '100%',
        position: 'relative',
    },
    appbar: {
        color: 'black',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        shadow: 'none',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    center: {
        // margin: '10px',
        color: '#394644',
        // width: '130px',
        // paddingRight: '20px',
        // fontWight: '200',
        fontSize: '20px',
        fontWeight: '300',
        textTransform: 'capitalize'

    },
    LogIn: {
        paddingLeft: '20px',
        paddingRight: '20px',

        // padding:'20px',
        marginRight: '20px',
        color: '#075A5D',
        backgroundColor: '#C8DEDF ',
        borderRadius: '5px',

    },
    SignUp: {
        paddingLeft: '20px',
        paddingRight: '20px',

        // padding:'20px',
        // marginRight: '20px',
        color: '#075A5D',
        border: '1px solid #075A5D',
        borderRadius: '5px',
        backgroundColor: 'none',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    console.log("home", 'render')
    return (
        <div className={classes.header}>
            <AppBar position="static" className={classes.appbar}>

                <div className="logo">
                    <img src={assets.logo} alt={'Articlone logo'} />
                </div>
                <div className={classes.Center}>
                    <Button className={classes.center} >Features</Button>
                    <Button className={classes.center} >FAQs</Button>
                    <Button className={classes.center} >About Us</Button>
                    <Button className={classes.center} >Contact us</Button>
                </div>
                <div className="left">
                    <Button className={classes.LogIn} >Log In</Button>
                    <Button className={classes.SignUp} >Sign Up</Button>
                </div>
            </AppBar>
            <Banner />
        </div>
    );
}


