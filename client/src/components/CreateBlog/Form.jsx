import React from 'react';

import TextField from "@material-ui/core/TextField";

import InputError from "../common/FormFieldError";
import styles from "./styles";


export default ({ handleChange, values, errors }) => {

    const classes = styles();


    return (
        <div>
            <div className={classes.textFieldWrapper}>
                <TextField

                    variant="filled"
                    margin="normal"
                    size='small'
                    required
                    fullWidth
                    className={classes.textField}
                    value={values.title}
                    label="Title"
                    type="Text"
                    name="title"
                    autoComplete="title"
                    error={errors.title ? true : false}
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
                    value={values.description}
                    label="Description"
                    type="Text"
                    multiline={true}
                    rows={3}
                    error={errors.description ? true : false}
                    name="description"
                    autoComplete="description"
                    onChange={handleChange}

                />
            </div>
            {errors.description && <InputError errorText={errors.description} />}
        </div>
    )
}