import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { RiLogoutBoxLine } from "react-icons/ri";
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

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import InputError from "../common/FormFieldError";

import { createProfile, updateProfile, uploadProfileImg } from '../../redux/_actions/profileAction';
import { userLogout } from '../../redux/_actions/authAction';
import useForm from "../../hooks/useForm";
import validate from "./validate";



export default (props) => {
    const classes = useStyles();

    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();
    const history = useHistory();

    const [imgLoading, setImgLoading] = useState(profile && profile.profileImg ? true : false);
    const [profileImgUrl, setProfileImgUrl] = useState(profile && profile.profileImg ? profile.profileImg : null);
    const [isLogout, setIsLogout] = useState(false);

    const imageRef = React.createRef();

    const submit = () => handleProfile();


    const { values, handleChange, handleSubmit, errors, isSubmitting } = useForm({
        firstName: profile ? profile.firstName : "",
        lastName: profile ? profile.lastName : "",
        purposeToJoin: profile ? profile.purposeToJoin : "",
    }, submit, validate)

    const handleProfile = async () => {
        if (profile) {
            await dispatch(updateProfile(values))
            return true;
        } else {
            await dispatch(createProfile(values))
        }
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
            formData.append("profile-img", value);
            const profileImg = await dispatch(uploadProfileImg(formData));
            setProfileImgUrl(profileImg);
            setImgLoading(true)
        }
    }

    const handleLogOut = async () => {
        setIsLogout(true);
        const ensureLogout = await dispatch(userLogout());
        if (ensureLogout) {
            localStorage.removeItem('secret');
            history.push("/login");
        }
    }
    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item >
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} component="h3" variant="h3">
                            Profile Settings
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <div className={classes.papercard}>
                        <div className={classes.name}>

                            <div className={classes.paperfield1}>

                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    className={classes.textfield1}
                                    required
                                    size="small"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="firstName"
                                    autoFocus
                                    error={errors.firstName ? true : false}
                                    value={values.firstName}
                                    onChange={handleChange}
                                />

                                {errors.firstName && <InputError errorText={errors.firstName} />}
                            </div>

                            <div className={classes.paperfield1}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    className={classes.textfield1}
                                    required
                                    size="small"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                    error={errors.lastName ? true : false}
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <InputError errorText={errors.lastName} />}
                            </div>
                        </div>
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
                                label="Describe your purpose"
                                name="purposeToJoin"
                                autoComplete="purposeToJoin"
                                error={errors.purposeToJoin ? true : false}
                                value={values.purposeToJoin}
                                onChange={handleChange}
                            />
                            {errors.purposeToJoin && <InputError errorText={errors.purposeToJoin} />}
                        </div>

                        <div className={classes.avatar}>
                            {profile && profile.profileImg ? (
                                <img src={profileImgUrl} alt="articlone profile image" onLoad={handleImgLoad} />
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
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                Save
                            </Button>
                            <Button
                                type="button"
                                variant="outlined"
                                color="primary"
                                className={classes.cancel}
                            >
                                Cancel
                            </Button>
                        </div>

                        <div className={classes.danger}>
                            <Button
                                type="button"
                                startIcon={<RiLogoutBoxLine />}
                                variant="contained"
                                color="primary"
                                className={classes.delete}
                                onClick={handleLogOut}
                                disabled={isLogout}
                            >
                                Log Out
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
    name: {
        display: 'flex',
        justifyContent: 'space-between',
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
        marginBottom: '30px',
    },
    paperfield1: {
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        boxSizing: 'border-box',
        paddingLeft: '0px',
        width: '45%',
        paddingRight: '0px',
        // marginTop: '30px',
        // width:'22vw',
        marginBottom: '30px',
    },
    textfield: {
        marginTop: '0px',
        marginBottom: '0px',
    },
    textfield1: {
        width: '100%',
        marginTop: '0px',
        marginBottom: '0px',
    },
    avatar: {
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
        background: '#378A41',
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
        color: '#353535',
        paddingRight: '16px',
        background: '#F1F1F1'
    },
}));
