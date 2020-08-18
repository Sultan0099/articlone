import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import { Link, useParams } from "react-router-dom";
import { IoMdListBox } from "react-icons/io";

import styles from "./styles";

export default ({ collectionId }) => {
    const classes = styles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <span className={classes.title}>
                    <Typography variant="h4" >Create Blog </Typography>
                </span>
                <Button
                    component={Link}
                    to={`/dashboard/${collectionId}/blog/all`}
                    color="primary"
                    variant="contained"
                    className={classes.appBarButton}>
                    <IoMdListBox style={{ fontSize: 25 }} />
                    All Blogs
                </Button>
            </Toolbar>
        </AppBar>
    )
}