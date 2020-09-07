import React, { useState } from 'react';

import Typography from "@material-ui/core/Typography";

import AcordianItem from "./AcordianItem";
import { postData, userData } from "./data";

import styles from "./styles";

export default () => {
    const classes = styles();
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setData(null);
        setExpanded(isExpanded ? panel : false);
    };

    const postArray = postData(setData);

    const postDetails = {

        fields: [
            "totalPages",
            "currentPage",
            "totalPosts",
            'postPerPage',
        ],
        postField: [
            'state',
            'id',
            'title',
            'description',
            'body',
            'createdAt',
            'updatedAt'
        ]
    };



    const userDetails = {
        inputFields: [
            "name",
            "email",
            "password"
        ],

        userFields: [
            "name",
            "email",
        ]
    }

    const userAccordianData = [
        {
            type: "Register User",
            method: 'Post',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/user/auth/register",
            description: "You use this api to register user on you site or application",
            fetch: null
        },
        {
            type: "Login User",
            method: 'Post',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/user/auth/login",
            description: "You use this api to register user on you site or application",
            fetch: null
        },
    ]


    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h2"> Posts Apis </Typography>
            {

                postArray.map((d, i) => (
                    <AcordianItem
                        key={i}
                        type={d.type}
                        queryParams={d.queryParams}
                        query={d.query}
                        method={d.method}
                        description={d.description}
                        details={postDetails}
                        fetch={d.fetch}
                        expanded={expanded}
                        handleChange={handleChange}
                        data={data}
                    />

                ))
            }

            <Typography component="h1" variant="h2" style={{ marginTop: 5 }}> Users Apis </Typography>
            {

                userData().map((d, i) => (
                    <AcordianItem
                        key={i}
                        type={d.type}
                        queryParams={d.queryParams}
                        query={d.query}
                        method={d.method}
                        description={d.description}
                        details={userDetails}
                        fetch={d.fetch}
                        expanded={expanded}
                        handleChange={handleChange}
                        data={data}
                    />

                ))
            }

        </div>
    );
}
