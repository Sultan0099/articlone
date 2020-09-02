import React from "react";

import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import styles from "./styles";


export default ({ property, value }) => {

    const classes = styles();
    return (
        <div>

            <div className={classes.flexAround}>
                <Typography className={clsx(classes.brick, classes.uppercase)}>
                    {property}
                </Typography>
                <Typography className={clsx(classes.brick, value.length > 6 ? '' : classes.uppercase)} style={{ marginLeft: 10 }}>
                    {value}
                </Typography>
            </div>
            <Divider />

        </div>
    )
}