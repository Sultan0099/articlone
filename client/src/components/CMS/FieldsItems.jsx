import React from "react";

import clsx from "clsx";
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import { AiOutlineNumber } from "react-icons/ai";


import styles from "./styles";

export default ({ fieldName, fieldArray, icon }) => {
    const classes = styles();
    return (
        <>
            <div style={{ marginTop: 9 }} className={clsx(classes.brick, classes.uppercase)}>
                <Typography >
                    {fieldName}
                </Typography>
                <div style={{ padding: 5 }}>
                    {fieldArray.map(field => (
                        <Chip
                            key={field}
                            style={{ margin: 5 }}
                            avatar={<Avatar> {typeof fieldName === 'string' ? 'S' : <AiOutlineNumber />}</Avatar>}

                            label={field}
                            color="primary"
                        />
                    ))}
                </div>
            </div>
            <Divider />
        </>
    )
}