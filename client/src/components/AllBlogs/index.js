import React, { useEffect, useState } from "react";

import Container from "@material-ui/core/Container"

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


import PostsTable from "./PostsTable";


import { getAllPosts } from "../../redux/_actions/postsAction"

export default () => {
    const dispatch = useDispatch();
    const { collectionId } = useParams()

    useEffect(() => {
        const fetchAllPosts = async () => {
            await dispatch(getAllPosts(collectionId))
        }
        fetchAllPosts();
    }, [dispatch, collectionId])


    return (
        <>
            <PostsTable />
        </>
    )
}