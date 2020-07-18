import React from 'react'

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles"

import { assets } from '../../theme'


export default function GoogleButton({ title }) {
    const classes = useStyles();
    return (
        <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.googlesubmit}
        >
            {title}
            <img src={assets.google} style={{ marginLeft: '10px' }} alt="Sorry!" />
        </Button>
    )
}

const useStyles = makeStyles((theme) => ({
    googlesubmit: {
        backgroundColor: '#18A1E8',
        color: 'white',
        marginBottom: '20px',
        fontSize: '14px',
        textTransform: 'initial',
        '&:hover': {
            backgroundColor: '#62ABF4'
        }
    },
}))