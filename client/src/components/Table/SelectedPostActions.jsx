import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";

import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";

import styles from "./styles";

export default ({ totalPosts, selectedPosts, postsPerPage, actions, setSelectedPosts }) => {
    const classes = styles();
    const { deletePostsAction, publishPostsAction, unPublishPostsAction } = actions;
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = async () => {
        setLoading(true);
        await deletePostsAction(selectedPosts, setLoading);
        if (!loading) {
            setSelectedPosts([]);
            setOpen(false);
        }

    }
    const handlePublish = async () => {
        await publishPostsAction(selectedPosts, setLoading);
        setSelectedPosts([]);
        if (!loading) { setSelectedPosts([]); }

    }
    const handleUnPublish = async () => {
        await unPublishPostsAction(selectedPosts, setLoading);

        if (!loading) { setSelectedPosts([]); }

    }

    return (
        <div className={classes.actionBar}>
            <div className={classes.flex}>
                <Typography variant="subtitle2" className={classes.m_9} > {selectedPosts.length} items selected </Typography>
                {(selectedPosts && selectedPosts.length > 0) && (
                    <>
                        <Button size='small' variant="text" className={classes.deleteButton} onClick={handleClickOpen}>
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
                                <Button onClick={handleClose} color="primary">
                                    close
                                </Button>
                                <Button onClick={handleDelete} autoFocus style={{ color: "red" }} size='medium'>
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>

                        <Button size='small' variant="text" className={classes.publishButton} onClick={handlePublish}>
                            <BsArrowBarUp style={{ fontSize: 18, marginRight: 2 }} />
                            Publish
                        </Button>
                        <Button size='small' variant="text" className={classes.unpublishButton} onClick={handleUnPublish}>
                            <BsArrowBarDown style={{ fontSize: 18, marginRight: 2 }} />
                            Un Publish
                        </Button>
                    </>
                )}

            </div>
            <div className={classes.flex}>
                <Typography variant="subtitle2" className={classes.m_9}> Total Posts : {totalPosts} </Typography>
                <Typography variant="subtitle2" className={classes.m_9}> Per Page : {postsPerPage} </Typography>
            </div>
        </div>
    )
}