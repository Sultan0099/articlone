import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";

import { FiFolderPlus } from "react-icons/fi";

import { useDispatch } from "react-redux";

import collectionStyles from "./styles";
import validate from "./validate"
import CreateCollectionForm from "./CreateCollectionForm";

import { createCollection } from '../../redux/_actions/collectionAction';

import useForm from "../../hooks/useForm";

export default () => {
    const classes = collectionStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const submit = () => createProject();

    const { handleChange, handleSubmit, values, errors, isSubmitting, } = useForm({
        title: '',
        description: ''

    }, submit, validate);

    const createProject = async () => {
        await dispatch(createCollection({ title: values.title, description: values.description }))
        setOpen(false);
        return true;
    }

    const handleClose = () => { setOpen(false) }
    const handleOpen = () => { setOpen(true) }
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea onClick={handleOpen} className={classes.cardAction}>
                    <CardContent className={classes.textCenter}>
                        <FiFolderPlus className={classes.folderIcon} />
                        <Typography component="h2" variant="h4" className={classes.t_color}>Create new Project </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    {/* ! Form  */}
                    <CreateCollectionForm values={values} errors={errors} handleChange={handleChange} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} disabled={isSubmitting} color="primary">
                        close
                    </Button>
                    <Button onClick={handleSubmit} disabled={isSubmitting} color="primary">
                        submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}