import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography';

import styles from "./styles";

export default ({ collection }) => {
    const classes = styles();

    return (
        <div>
            <Avatar size="large" variant="rounded" className={classes.avatar}> {collection.title.substring(0, 2).toUpperCase()}</Avatar>
            <Typography component="p">{collection.title} </Typography>
        </div>
    )
}