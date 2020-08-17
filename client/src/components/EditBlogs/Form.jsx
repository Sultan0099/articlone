import React from 'react';

import TextField from "@material-ui/core/TextField";

import styles from "./styles";


export default ({ handleChange, values }) => {

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

                    onChange={handleChange}

                />
            </div>
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

                    name="description"
                    autoComplete="description"
                    onChange={handleChange}

                />
            </div>

        </div>
    )
}