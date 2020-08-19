import React, { useState } from 'react';
import axios from "axios";

import AcordianItem from "./AcordianItem";


import styles from "./styles";

export default () => {
    const classes = styles();
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setData(null);
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
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/posts/all",
            description: "This api is used to fetch first 10 all posts ",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/all`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "Get Published Posts",
            method: 'get',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/posts/published",
            description: "This api is used to fetch first 10 published posts ",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/published`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "Get Un Published Posts",
            method: 'get',
            queryParams: null,
            query: "http://localhost:3001/cms/{Your apikey}/posts/unpublished",
            description: "This api is used to fetch first 10 unpublished posts ",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/unpublished`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "next or previous all posts",
            method: 'get',
            queryParams: ['page', 'limit'],
            query: "http://localhost:3001/cms/{Your apikey}/posts/all?page={number}&limit={number}",
            description: "This api is used to get next or previous all posts , you can change limit and page as you want",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/all?page=1&limit=10`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "next or previous published posts",
            method: 'get',
            queryParams: ['page', 'limit'],
            query: "http://localhost:3001/cms/{Your apikey}/posts/published?page={number}&limit={number}",
            description: "This api is used to get next or previous published posts , you can change limit and page as you want",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/published?page=1&limit=10`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        },
        {
            type: "next or previous Un Published posts",
            method: 'get',
            queryParams: ['page', 'limit'],
            query: "http://localhost:3001/cms/{Your apikey}/posts/unpublished?page={number}&limit={number}",
            description: "This api is used to get next or previous un-published posts , you can change limit and page as you want",
            fetch: async (apiKey) => {
                const res = await axios.get(`http://localhost:3001/cms/${apiKey}/posts/unpublished?page=1&limit=10`);
                let stringData = JSON.stringify(res.data.data);
                let splitData = stringData.split(",");

                setData(splitData);
            }
        }
    ]

    return (
        <div className={classes.root}>
            {
                accordianData.map((d, i) => (
                    <AcordianItem
                        key={i}
                        type={d.type}
                        queryParams={d.queryParams}
                        query={d.query}
                        method={d.method}
                        description={d.description}
                        details={details}
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
