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
        marginTop:'10px',
        textAlign: 'center',
        boxShadow: 'none',
        color: theme.palette.text.secondary,
    },
    radiopaper: {
        paddingLeft:'15px',
        boxShadow: 'none',
    },
    title: {
        textAlign:'center',
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
    gendertitle: {
        fontWeight: '600',
        textAlign:'left',
        marginTop:'20px',
        marginBottom:'20px',
    },
    radio: {
        fontSize: '50px',
    },
}));

export default function FullWidthGrid() {
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
                                    id="firstName"
                                    label="First name"
                                    name="firstName"
                                    autoComplete="firstName"
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
                                    id="lastName"
                                    label="Last name"
                                    name="lastName"
                                    autoComplete="lastName"
                                    // autoFocus
                                // value={values.firstName}
                                // onChange={handleChange}
                                />
                            </Paper>
                            <Paper className={classes.radiopaper} >
                                <FormLabel component="legend">
                                    <Typography variant="h3" className={classes.gendertitle}>
                                        Gender
                                    </Typography>
                                </FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="Female" className={classes.radio} color="primary" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </Paper>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
