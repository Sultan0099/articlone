import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useParams } from "react-router-dom";
import axios from "axios";

import ResendEmail from '../components/common/ResendEmail';
import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100vh',
    },
    papercard: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20vh',
        marginTop: '20px',
        paddingBottom: '30px',
        textAlign: 'center',
        width: '37vw',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        // backgroundColor:'pink',
        borderRadius: "8px",
    },
    title: {
        fontWeight: '400',
    },
    info: {
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: 'center',
        color: '#808080',
        float: 'left',
        marginTop: '10px',
    },
    undrawemail: {
        width: '190px',
        marginBottom: '10px',
    },
}));

export default function CheckEmail() {
    const classes = useStyles();
    const { email } = useParams();

    const resendMail = async () => {
        try {
            await axios.post("/api/v1/resend-mail", { email }, {
                headers: {
                    'content-type': 'application/json'
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <div className={classes.papercard}>
                        <img src={assets.undrawemail} className={classes.undrawemail} alt="sorry" />
                        <Typography component="h1" className={classes.title} variant="h2">
                            Confirm your email!
                        </Typography>
                        <Typography component="h1" variant="subtitle1" className={classes.info} >
                            <span>Your account has been successfully registered. To complete the process please check your email for a validation request.
                            </span>
                        </Typography>
                        <ResendEmail resend="Resend Email" handleClick={resendMail} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

