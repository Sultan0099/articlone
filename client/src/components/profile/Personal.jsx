import React from 'react'

import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

import InputError from "../common/FormFieldError";
import profileStyles from "./styles"

export default function Personal({ values, errors, handleChange }) {
    const classes = profileStyles();
    return (
        <>
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.firstName ? true : false}
                    value={values.firstName}
                    label="First Name"
                    type="Text"
                    name="firstName"
                    autoComplete="firstName"
                    onChange={handleChange}

                />

            </div>
            {errors.firstName && <InputError errorText={errors.firstName} />}
            <div className={classes.textFieldWrapper}>
                <TextField
                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}

                    error={errors.lastName ? true : false}
                    value={values.lastName}
                    label="Last Name"
                    type="Text"
                    name="lastName"
                    autoComplete="lastName"
                    onChange={handleChange}

                />

            </div>
            {errors.lastName && <InputError errorText={errors.lastName} />}
            <div className={classes.radioWrapper}>
                <FormLabel component="legend">
                    <Typography variant="h4"> Choose Your Gender </Typography>
                </FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={values.gender} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </div>
            {errors.gender && <InputError errorText={errors.gender} />}

            <div className={classes.textFieldWrapper}>
                <TextField
                    variant="filled"
                    style={{ marginTop: '0px', marginBottom: '0px' }}
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    multiline={true}
                    rows={3}
                    error={errors.purposeToJoin ? true : false}
                    value={values.purposeToJoin}
                    label="Tell us why are you joining Articlone"
                    type="Text"
                    name="purposeToJoin"
                    autoComplete="purposeToJoin"
                    onChange={handleChange}

                />

            </div>
            {errors.purposeToJoin && <InputError errorText={errors.purposeToJoin} />}
        </>
    )
}
