import React from 'react';


import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';


import InputError from "../common/FormFieldError";
import profileStyles from "./styles"

export default function Business({ values, errors, handleChange }) {
    const classes = profileStyles();

    return (
        <>
            <div className={classes.radioWrapper}>
                <FormLabel component="legend">
                    <Typography variant="h4"> Choose Your Business </Typography>
                </FormLabel>
                <RadioGroup aria-label="businessType" name="businessType" value={values.businessType} onChange={handleChange}>
                    <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                    <FormControlLabel value="organization" control={<Radio />} label="Organization" />
                </RadioGroup>
            </div>
            {errors.businessType && <InputError errorText={errors.businessType} />}

            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.businessName ? true : false}
                    value={values.businessName}
                    label="Company Name (Optional)"
                    type="Text"
                    name="businessName"
                    autoComplete="businessName"
                    onChange={handleChange}

                />
            </div>
            {errors.businessName && <InputError errorText={errors.businessName} />}
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.businessWebsite ? true : false}
                    value={values.businessWebsite}
                    label="Your Website (Optional)"
                    type="Text"
                    name="businessWebsite"
                    autoComplete="businessWebsite"
                    onChange={handleChange}

                />
            </div>
            {errors.businessWebsite && <InputError errorText={errors.businessWebsite} />}
        </>
    )
}
