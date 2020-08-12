import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import CircularIndicator from "../common/CircularIndicator";
import Header from "./Header";

import Table from "../Table"

import { getPaginatedPost } from "../../redux/_actions/postsAction"

export default () => {
    const [loading, setLoading] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const posts = useSelector(state => state.posts)

    const dispatch = useDispatch();
    const { collectionId } = useParams()


    useEffect(() => {
        const fetchAllPosts = async () => {
            await dispatch(getPaginatedPost({ collectionId }))
            setLoading(false);
        }
        fetchAllPosts();
    }, [dispatch, collectionId])

    const tableHeaderData = [
        "state",
        "_id",
        "title",
        "description",
        "createdAt",
        "updatedAt"
    ]

    const selectPost = (e, selectedPosts) => {
        console.log(selectedPosts)
    }




    return (
        <>
            <Header collectionId={collectionId} />

            {loading ? <CircularIndicator /> : (
                <Table
                    data={posts}
                    tableHeaderData={tableHeaderData}
                    onSelect={selectPost}


                />
            )
            }
        </>
    )
}