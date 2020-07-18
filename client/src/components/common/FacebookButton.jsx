import React from 'react'

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { assets } from '../../theme'


export default function FacebookButton({ title }) {
    const classes = useStyles();
    return (
        <Button
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.facebooksubmit}
        >
            {title}
            <img src={assets.facebook} alt="Sorry!" style={{ marginLeft: '10px' }} />
        </Button>
    )
}

const useStyles = makeStyles((theme) => ({
    facebooksubmit: {
        fontSize: '14px',
        backgroundColor: '#3D60A7',
        color: 'white',
        textTransform: 'initial'
    },
}))