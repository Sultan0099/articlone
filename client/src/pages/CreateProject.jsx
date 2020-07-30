import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";


import { assets } from '../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none',
        backgroundColor:'white',
        height: '100vh',
    },
    papercard: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '8vh',
        marginTop: '20px',
        paddingBottom: '30px',
        textAlign: 'center',
        width: '50vw',
        // backgroundColor: 'pink',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        borderRadius: "8px",
    },
    fieldpaper: {
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        marginTop: '30px',
        width: '20vw',
        [theme.breakpoints.down('xs')]: {
            width:'125px',
        },
        float: 'left',
    },
    fieldpaper2: {
        width: '20vw',
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        marginTop: '30px',
        [theme.breakpoints.down('xs')]: {
            width:'125px',
        },
        marginLeft: '0px',
        float: 'right',
    },
    title: {
        fontWeight: '600',
        textAlign: 'left',
        color: 'black',
        marginBottom: '10px',
    },
    info: {
        fontSize: '18px',
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: 'center',
        color: '#808080',
        float: 'left',
        marginTop: '10px',
    },
    buttons: {
        flexGrow: '1',
    },
    cancel: {
        float: 'left',
        textTransform:'initial',
    },
    create: {
        float: 'right',
        textTransform:'initial',
    },
    createimg: {
        [theme.breakpoints.down('sm')]: {
            width:'40vw',
        },
        [theme.breakpoints.down('xs')]: {
            width:'250px',
        },
        marginTop:'50px',
        width: '400px',
        marginBottom: '40px',
    },
}));

export default function CreateProject() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" >
                <Grid item xs={12} sm={6}>
                    <div className={classes.papercard}>
                        <Typography component="h2" className={classes.title} variant="h4">
                            Create a new project
                        </Typography>
                        <Paper className={classes.fieldpaper} >
                            <TextField
                                variant="filled"
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                label="Title"
                                name="title"
                                autoComplete="title"
                            // error={errors.username ? true : false}
                            // value={values.username}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            />
                        </Paper>
                        <Paper className={classes.fieldpaper2} >
                            <TextField
                                variant="filled"
                                margin="normal"
                                color='primary'
                                required
                                fullWidth
                                style={{ marginTop: '0px', marginBottom: '0px' }}
                                size="small"
                                label="Description"
                                name="Description"
                                autoComplete="Description"
                            // error={errors.username ? true : false}
                            // value={values.username}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            />
                        </Paper>
                        <img src={assets.createimg} className={classes.createimg} alt="sorry" />
                        {/* <Typography component="h1" variant="subtitle1" className={classes.info} >
                            <span></span>
                        </Typography> */}
                        <div className="buttons">
                            <Button component={Link} to="/username" className={classes.cancel} type="button" variant="secndary" color="primary">Cancel</Button>
                            <Button component={Link} to="/username" type="button" className={classes.create} variant="contained" color="primary">Create Project</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

