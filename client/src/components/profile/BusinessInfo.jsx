import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        marginTop: '10px',
        textAlign: 'center',
        boxShadow: 'none',
        color: theme.palette.text.secondary,
    },
    radiopaper: {
        paddingLeft: '15px',
        boxShadow: 'none',
    },
    title: {
        textAlign: 'center',
    },
    paperfield: {
        width: '300px',
        textAlign: 'center',
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        boxSizing: 'border-box',
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop: '30px',

        marginBottom: '10px',
    },
    businesstitle: {
        fontWeight: '600',
        textAlign: 'left',
        marginTop: '20px',
        marginBottom: '20px',
    },
    radio: {
        fontSize: '50px',
    },
}));

export default function Info() {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <FormControl component="fieldset">
                            <Paper className={classes.radiopaper} >
                                <FormLabel component="legend">
                                    <Typography variant="h3" className={classes.businesstitle}>
                                        About your business
                                    </Typography>
                                </FormLabel>
                                <RadioGroup aria-label="business" name="business1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="Individual" className={classes.radio} color="primary" control={<Radio />} label="Individual" />
                                    <FormControlLabel value="Company" control={<Radio />} label="Company" />
                                </RadioGroup>
                            </Paper>
                            <Paper className={classes.paperfield} >
                                <TextField
                                    type="text"
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    required
                                    fullWidth
                                    style={{ marginTop: '0px', marginBottom: '0px' }}
                                    size="small"
                                    id="name"
                                    label="Business Name"
                                    name="Business Name"
                                    autoComplete="name"
                                    autoFocus
                                // value={values.firstName}
                                // onChange={handleChange}
                                />
                            </Paper>
                            <Paper className={classes.paperfield} >
                                <TextField
                                    type="text"
                                    variant="filled"
                                    margin="normal"
                                    color='primary'
                                    required
                                    fullWidth
                                    style={{ marginTop: '0px', marginBottom: '0px' }}
                                    size="small"
                                    id="websiteLink"
                                    label="Add website link"
                                    name="websiteLink"
                                    autoComplete="websiteLink"
                                // autoFocus
                                // value={values.firstName}
                                // onChange={handleChange}
                                />
                            </Paper>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
