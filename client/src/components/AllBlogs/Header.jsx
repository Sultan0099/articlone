import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

import styles from "./styles";

export default ({ collectionId }) => {
    const classes = styles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <span className={classes.title}>
                    <Typography variant="h4" >Your Blogs </Typography>
                </span>
                <Button
                    component={Link}
                    to={`/dashboard/${collectionId}/blog/create`}
                    color="primary"
                    variant="contained"
                    className={classes.appBarButton}>
                    <IoIosAdd style={{ fontSize: 25 }} />
                Create New
                </Button>
            </Toolbar>
        </AppBar>
    )
}