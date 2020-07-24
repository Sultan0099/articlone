import React from 'react';

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion'

import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        position: 'fixed',
        boxShadow: 'none',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    loadingImg: {
        width: '60px'
    },
    loadingText: {
        marginTop: '14px'
    }

}));

export default function PasswordReset() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <motion.img src={assets.loading}

                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 0.9, yoyo: Infinity, ease: 'easeInOut' }}

                className={classes.loadingImg} alt="articlone loading img"
            />
            <Typography className={classes.loadingText} variant="h4" > Loading </Typography>
        </div>

    );
}

