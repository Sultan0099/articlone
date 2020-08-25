import React from "react";

import collectionStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button";


import { Link } from "react-router-dom";

export default ({ collection }) => {
    const classes = collectionStyles();
    return (
        <Paper className={classes.collectionWrapper} >
            <Avatar size="large" variant="rounded" className={classes.avatar}>

                {collection.collectionImg ? (
                    <img src={collection.collectionImg} alt='articlone collection avatar' style={{ width: "100%", height: "100%" }} />
                ) : collection.title.substring(0, 2).toUpperCase()}
            </Avatar>
            <div className={classes.contentWrapper}>
                <Typography variant="h4"> {collection.title} </Typography>
                <Typography component="p"> {collection.description} </Typography>
            </div>
            <Button
                component={Link}
                to={`/dashboard/${collection._id}`}
                color="primary"
                variant="contained"
                size="small"
            >
                Open Project
        </Button>
        </Paper>
    )
}