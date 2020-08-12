import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";



import styles from "./styles";


export default () => {
    const classes = styles();
    return (
        <div className={classes.actionBar}>
            <div className={classes.flex}>
                <Typography variant="subtitle2" className={classes.m_9}> {0} items selected </Typography>
                <Button size='small' variant="text" className={classes.deleteButton}>
                    <FaRegTrashAlt style={{ fontSize: 11, marginRight: 2 }} />
                    Delete
                </Button>
                <Button size='small' variant="text" color="secondary" className={classes.publishButton}>
                    <BsArrowBarUp style={{ fontSize: 18, marginRight: 2 }} />

                    Publish
                </Button>
                <Button size='small' variant="text" color="secondary" className={classes.unpublishButton}>
                    <BsArrowBarDown style={{ fontSize: 18, marginRight: 2 }} />

                    Un Publish
                </Button>
            </div>
            <div>
                <Typography variant="subtitle2" className={classes.m_9}> TotalPost : {20} </Typography>
            </div>
        </div>
    )
}