import React from "react";

import clsx from "clsx";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from "@material-ui/core/Divider";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


import styles from "./styles";

export default (props) => {
    const classes = styles();
    const { type, query, fetch, expanded, handleChange, details, method, description } = props;
    console.log(details)
    return (

        <Accordion expanded={expanded === type} onChange={handleChange(type)}>
            <AccordionSummary
                expandIcon={<><ExpandMoreIcon /></>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>
                    <span className={classes.detailSpan}>
                        purpose
                    </span> : <span className={clsx(classes.brick, classes.uppercase)}>{type}</span>
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    <span className={classes.detailSpan}>
                        Api
                    </span> : <span className={classes.brick}> {query} </span></Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
                <div className={classes.accordianDetailsItems}>
                    <div className={classes.flexAround}>
                        <Typography className={clsx(classes.brick, classes.uppercase)}>
                            method
                        </Typography>
                        <Typography className={clsx(classes.brick, classes.uppercase)}>
                            {method.toUpperCase()}
                        </Typography>
                    </div>
                    <Divider />
                    <div className={classes.flexAround}>
                        <Typography className={clsx(classes.brick, classes.uppercase)}>
                            description
                        </Typography>
                        <Typography className={clsx(classes.brick, classes.uppercase)}>
                            {description.toUpperCase()}
                        </Typography>
                    </div>
                    <Divider />
                    <div style={{ marginTop: 9 }} className={clsx(classes.brick, classes.uppercase)}>
                        <Typography >
                            Fields
                        </Typography>
                        <div style={{ padding: 5 }}>
                            {details.fields.map(field => (
                                <Chip
                                    style={{ margin: 5 }}
                                    avatar={<Avatar>{field.substring(0, 1)}</Avatar>}
                                    label={field}
                                    color="primary"
                                />
                            ))}
                        </div>
                    </div>
                    <Divider />

                </div>
                <div className={classes.accordianDetailsItems}></div>
            </AccordionDetails>
        </Accordion >
    )
}