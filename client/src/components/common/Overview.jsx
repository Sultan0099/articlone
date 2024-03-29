import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import { Link, useParams } from "react-router-dom";


import { assets } from '../../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        marginLeft: '-30px',
        height: '100vh',
    },
    papercard: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '13vh',
        marginTop: '20px',
        paddingBottom: '30px',
        textAlign: 'center',
        width: '37vw',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        borderRadius: "8px",
    },
    title: {
        fontWeight: '600',
        fontSize: "36px",
        marginBottom: '30px',
    },
    info: {
        fontSize: '18px',
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: 'center',
        color: '#808080',
        float: 'left',
        marginTop: '10px',
    },
    model: {
        width: '300px',
        marginBottom: '10px',
    },
}));

export default function Overview() {
    const { collectionId } = useParams();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <div className={classes.papercard}>
                        <img src={assets.model} className={classes.model} alt="sorry" />
                        <Typography component="h3" className={classes.title} variant="h2">
                            Create your first Blog to get started
                        </Typography>
                        <Button component={Link} to={`/dashboard/${collectionId}/blog/create`} type="button" variant="contained" color="primary">+ Create First Blog</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}