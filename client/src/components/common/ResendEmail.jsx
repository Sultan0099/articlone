import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    resend: {
        flexGrow: 1,
        boxShadow: 'none',
        width: "100%",
        backgroundColor: 'white',
    },
    linkpaper: {
        padding: theme.spacing(0),
        boxShadow: 'none',
        textAlign: 'center',
        width: '250px',
        borderRadius: '0px',
        color: theme.palette.text.secondary,
    },
    link: {
        color: "blue",
        marginLeft: '10px'
    },
}));

export default function ResendEmail({ handleClick }) {
    const classes = useStyles();

    return (
        <div className={classes.resend}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.linkpaper}>
                        <Button type="button" variant="text" color="primary" onClick={handleClick}>Resend Mail</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
