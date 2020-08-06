import React from 'react';
import collectionStyles from './styles';

import TextField from "@material-ui/core/TextField";

import InputError from "../common/FormFieldError";

export default ({ values, errors, handleChange }) => {
    const classes = collectionStyles();
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
                    error={errors.title ? true : false}
                    value={values.title}
                    label="Project Title"
                    type="Text"
                    name="title"
                    autoComplete="title"
                    onChange={handleChange}

                />

            </div>
            {errors.title && <InputError errorText={errors.title} />}
            <div className={classes.textFieldWrapper}>
                <TextField
                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    multiline={true}
                    rows={3}
                    error={errors.description ? true : false}
                    value={values.description}
                    label="Description"
                    type="Text"
                    name="description"
                    autoComplete="description"
                    onChange={handleChange}

                />

            </div>
            {errors.description && <InputError errorText={errors.description} />}

        </>
    )
}