import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";


import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import FilterPosts from "./FilterPosts";

import styles from "./styles";

export default ({ totalPosts, selectedPosts, postsPerPage, actions, setSelectedPosts, filterAction }) => {
    const classes = styles();
    const { deletePostsAction, publishPostsAction, unPublishPostsAction } = actions;
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!loading) {
            console.log("run effect condition");
            setSelectedPosts([]);
            setOpen(false);
        }
    }, [loading])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = async () => {
        setLoading(true)
        await deletePostsAction(selectedPosts, setLoading);
    }

    const handlePublish = async () => {
        setLoading(true);
        await publishPostsAction(selectedPosts, setLoading);
    }

    const handleUnPublish = async () => {
        setLoading(true)
        await unPublishPostsAction(selectedPosts, setLoading);
    }

    return (
        <div className={classes.actionBar}>
            <div className={classes.flex}>
                <Typography variant="subtitle2" className={classes.m_9} > {selectedPosts.length} items selected </Typography>
                {(selectedPosts && selectedPosts.length > 0) && (
                    <>
                        <Button size='small' variant="text" className={classes.deleteButton} onClick={handleClickOpen} disabled={loading ? true : false}>
                            <FaRegTrashAlt style={{ fontSize: 11, marginRight: 2 }} />
                            Delete
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title"> Delete Post </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    You will lost all of your selected posts permanently
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary" disabled={loading ? true : false}>
                                    close
                                </Button>
                                <Button onClick={handleDelete} autoFocus style={{ color: "red" }} size='medium' disabled={loading ? true : false}>
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>

                        <Button size='small' variant="text" className={classes.publishButton} onClick={handlePublish} disabled={loading ? true : false}>
                            <BsArrowBarUp style={{ fontSize: 18, marginRight: 2 }} />
                            Publish
                        </Button>
                        <Button size='small' variant="text" className={classes.unpublishButton} onClick={handleUnPublish} disabled={loading ? true : false}>
                            <BsArrowBarDown style={{ fontSize: 18, marginRight: 2 }} />
                            Un Publish
                        </Button>
                        {loading && <CircularProgress color="primary" style={{ width: 20, height: 20, marginLeft: 5 }} />}
                    </>
                )}

            </div>
            <div className={classes.flex}>
                <Typography variant="subtitle2" className={classes.m_9}> Total Posts : {totalPosts} </Typography>
                <Typography variant="subtitle2" className={classes.m_9}> Per Page : {postsPerPage} </Typography>
                <FilterPosts filterAction={filterAction} />
            </div>
        </div>
    )
}