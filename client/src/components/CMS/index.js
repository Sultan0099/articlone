import React from 'react';

import AcordianItem from "./AcordianItem";

import styles from "./styles";

export default () => {
    const classes = styles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const details = {

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

    const accordianData = [
        {
            type: "Get All Posts",
            method: 'get',
            query: "http://localhost:3001/cms/apikey/posts/all",
            description: "This api is used to fetch first 10 all posts ",
            fetch: () => { console.log("start fetching") }
        },
        {
            type: "Get Published Posts",
            method: 'get',
            query: "http://localhost:3001/cms/apikey/posts/published",
            description: "This api is used to fetch first 10 all posts ",
            fetch: () => { console.log("start fetching") }
        },
        {
            type: "Get Un Published Posts",
            method: 'get',
            query: "http://localhost:3001/cms/apikey/posts/unpublished",
            description: "This api is used to fetch first 10 all posts ",
            fetch: () => { console.log("start fetching") }
        }
    ]

    return (
        <div className={classes.root}>
            {
                accordianData.map((d, i) => (
                    <AcordianItem
                        key={i}
                        type={d.type}
                        query={d.query}
                        method={d.method}
                        description={d.description}
                        details={details}
                        fetch={d.fetch}
                        expanded={expanded}
                        handleChange={handleChange} />
                ))
            }

        </div>
    );
}
