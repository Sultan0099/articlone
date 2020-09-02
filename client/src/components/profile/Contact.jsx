import React from 'react'

import TextField from "@material-ui/core/TextField";


import InputError from "../common/FormFieldError";
import profileStyles from "./styles"


export default function Contact({ values, errors, handleChange }) {
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
                    error={errors.address ? true : false}
                    value={values.address}
                    label="Street Address"
                    type="Text"
                    name="address"
                    autoComplete="address"
                    onChange={handleChange}

                />

            </div>
            {errors.address && <InputError errorText={errors.address} />}
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.city ? true : false}
                    value={values.city}
                    label="City Name"
                    type="Text"
                    name="city"
                    autoComplete="city"
                    onChange={handleChange}

                />

            </div>
            {errors.city && <InputError errorText={errors.city} />}
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.zipOrPostal ? true : false}
                    value={values.zipOrPostal}
                    label="Postal Code"
                    type="text"
                    name="zipOrPostal"
                    autoComplete="zipOrPostal"
                    onChange={handleChange}

                />

            </div>
            {errors.zipOrPostal && <InputError errorText={errors.zipOrPostal} />}
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.country ? true : false}
                    value={values.country}
                    label="Country"
                    type="text"
                    name="country"
                    autoComplete="country"
                    onChange={handleChange}

                />

            </div>
            {errors.country && <InputError errorText={errors.country} />}
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    error={errors.phoneNo ? true : false}
                    value={values.phoneNo}
                    label="Phone No."
                    type="text"
                    name="phoneNo"
                    autoComplete="phoneNo"
                    onChange={handleChange}

                />

            </div>
            {errors.phoneNo && <InputError errorText={errors.phoneNo} />}

        </>
    )
}
