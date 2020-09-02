import React from "react";

import clsx from "clsx";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import { IoMdPlay } from "react-icons/io";

import { useSelector } from "react-redux";

import styles from "./styles";
import FlexItem from "./FlexItem";
import FieldsItem from "./FieldsItems";

export default (props) => {
    const classes = styles();
    const apiKey = useSelector(state => state.collections.apiKey);
    const { type, query, fetch, expanded, handleChange, details, method, description, data, queryParams } = props;
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
                        ApiKey
                    </span> : <span className={classes.brick}> {apiKey} </span></Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
                <div className={classes.accordianDetailsItems}>

                    <FlexItem property="method" value={method} />
                    <FlexItem property="Api" value={query} />
                    <FlexItem property="description" value={description} />


                    <FieldsItem fieldName="common fields" fieldArray={details.fields} />
                    {queryParams && <FieldsItem fieldName="query params" fieldArray={queryParams} />}
                    <FieldsItem fieldName="posts fields" fieldArray={details.postField} icon="S" />

                    <Button color="primary" size="large" variant="contained" style={{ marginTop: 15 }} onClick={() => fetch(apiKey)}>
                        <IoMdPlay style={{ marginLeft: 2 }} />
                        Fetch Data
                    </Button>


                </div>
                <div className={classes.accordianDetailsItems} style={{ overflow: "scroll" }}>
                    {data && data.map((item, index) => (
                        <p key={index} style={{ marginTop: 2, marginBottom: 1 }}>{item}</p>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion >
    )
}