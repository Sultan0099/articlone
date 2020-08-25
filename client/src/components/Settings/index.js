import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from "@material-ui/core/colors";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateCollection, uploadCollectionImg } from "../../redux/_actions/collectionAction";

import InputError from "../common/FormFieldError";

import useForm from "../../hooks/useForm";
import validate from "./validate";

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { collectionId } = useParams();
    const activeCollection = useSelector(state => state.collections.active);
    const [imgLoading, setImgLoading] = useState(activeCollection && activeCollection.collectionImg ? true : false);
    const [collectionImgUrl, setCollectionImgUrl] = useState(activeCollection && activeCollection.collectionImg ? activeCollection.collectionImg : null);

    const imageRef = React.createRef();

    const submit = () => handleCollection();
    const { values, handleChange, handleSubmit, errors, isSubmitting } = useForm({
        title: activeCollection.title,
        description: activeCollection.description
    }, submit, validate)

    const handleCollection = async () => {
        console.log(values);
        console.log(errors);
        console.log(isSubmitting)
        await dispatch(updateCollection(collectionId, values));
        return true;
    }
    const handleImgLoad = () => {
        setImgLoading(false)
    }

    const handleUpload = () => {
        imageRef.current.click();
    }

    const insertImage = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (
            e.currentTarget &&
            e.currentTarget.files &&
            e.currentTarget.files.length > 0
        ) {

            const value = e.currentTarget.files[0];
            let formData = new FormData();
            formData.append("collection-img", value);
            const imgUrl = await dispatch(uploadCollectionImg(collectionId, formData));
            setCollectionImgUrl(imgUrl);
            setImgLoading(true)
        }
    }


    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} component="h3" variant="h3">
                            Project Information
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <div className={classes.papercard}>
                        <div className={classes.paperfield}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                color='primary'
                                className={classes.textfield}
                                required
                                fullWidth
                                size="small"
                                label="Name"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                autoComplete="title"

                            />
                        </div>
                        {errors.title && <InputError errorText={errors.title} />}
                        <div className={classes.paperfield}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                multiline={true}
                                rows={3}
                                color='primary'
                                className={classes.textfield}
                                required
                                fullWidth
                                size="small"
                                label="Description"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                autoComplete="description"

                            />
                        </div>
                        {errors.description && <InputError errorText={errors.description} />}
                        <div className={classes.avatar}>
                            {console.log(collectionImgUrl)}
                            {activeCollection && activeCollection.collectionImg ? (
                                <img src={collectionImgUrl} alt="articlone collection image" onLoad={handleImgLoad} />
                            ) : (
                                    <Avatar variant="rounded" className={classes.rounded}></Avatar>
                                )}

                            {imgLoading ? <CircularProgress /> : <div className={classes.uploadbtn}>
                                <Button variant="contained"
                                    startIcon={<PhotoCamera />}
                                    color="primary"
                                    component="span"
                                    onClick={handleUpload}
                                >
                                    Upload
                                </Button>
                            </div>}
                        </div>
                        <div className={classes.wrapper}>
                            <Button
                                type="button"
                                // fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                            <Button
                                type="button"
                                // fullWidth
                                variant="outlined"
                                color="primary"
                                className={classes.cancel}
                            >
                                Cancel
                            </Button>
                        </div>
                        <Typography component="h2" className={classes.danger} variant="h3">
                            Danger Zone
                            </Typography>
                        <div className={classes.danger}>
                            <Button
                                type="button"
                                // fullWidth
                                startIcon={<DeleteIcon />}
                                variant="contained"
                                color="primary"
                                className={classes.delete}
                            >
                                Delete Project
                            </Button>
                        </div>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        ref={imageRef}
                        style={{ display: "none" }}
                        onChange={insertImage}
                    />

                </Grid>
            </Grid>
        </div >
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        height: '100%',
        backgroundColor: 'white',
    },
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        position: 'relative',
        marginBottom: '30px',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    logopaper: {
        paddingLeft: '20px',
        paddingRight: '20px',
        padding: theme.spacing(0),
        boxShadow: 'none',
        width: '300px',
        marginTop: '50px',
        textAlign: 'center',
    },
    paper: {
        paddingLeft: '20px',
        boxShadow: 'none',
        marginTop: '50px',
        paddingRight: '20px',
        width: '635px',
        textAlign: 'left',
    },
    papercard: {
        paddingLeft: '20px',
        paddingRight: '20px',
        // paddingTop: '30px',
        marginTop: '20px',
        // paddingBottom: '30px',
        textAlign: 'justify',
        width: '630px',
        boxShadow: 'none',
    },
    paperfield: {
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        boxSizing: 'border-box',
        paddingLeft: '0px',
        paddingRight: '0px',
        // marginTop: '30px',
        // width:'22vw',
        marginTop: '30px',
    },
    textfield: {
        marginTop: '0px',
        marginBottom: '0px',
    },
    avatar: {
        marginTop: "30px",
        marginBottom: '30px',
        width: 200,
        marginBottom: '30px',


        "&>img": {
            width: "100%"
        }
    },
    twobtn: {
        // display: 'flex',
    },
    rounded: {
        background: '#016B88',
        width: '135px',
        height: '135px',
        color: 'white',
    },
    uploadbtn: {
        marginTop: '-20px',
        marginLeft: '10px',
    },
    submit: {
        // float: 'left',
        textTransform: 'initial',
        padding: theme.spacing(1, 0),
    },
    cancelbtn: {
        padding: theme.spacing(1, 0),
        // float: 'right'
    },
    title: {
        fontWeight: '600',
    },
    danger: {
        fontWeight: '600',
        marginBottom: '30px',
    },
    delete: {
        textTransform: 'initial',
        padding: theme.spacing(1, 0),
        paddingLeft: '16px',
        paddingRight: '16px',
        background: '#E12B2B'
    },
}));
