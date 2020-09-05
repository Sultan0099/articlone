import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { assets } from '../../theme'
const useStyles = makeStyles((theme) => ({
    root: {
    },
    cardDetail: {
        marginTop: 120,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    console.log("home", 'render')
    return (
        <div >
            <div className={classes.cardDetail}>
                <h1>Why Articlone?</h1>
                <p>Build your digital experiences API-first the way you envisioned them. No templates, no restrictions, no boundaries</p>
                <div>

                    <div className={classes.card}></div>
                    <div className={classes.card}></div>
                    <div className={classes.card}></div>

                </div>
            </div>
        </div>
    );
}
