import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import CircularIndicator from "../common/CircularIndicator";
import Header from "./Header";

import Table from "../Table"

import { getPaginatedPost, deletePosts, publishPosts, unPublishPosts } from "../../redux/_actions/postsAction"

export default () => {
    const [loading, setLoading] = useState(true);

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
        // console.log(selectedPosts)
    }

    const deletePostsAction = async (selectedPosts, loading) => {
        await selectedPosts.forEach(async postId => {
            try {
                await dispatch(deletePosts(postId));
                return
            } catch (err) {
                console.log(err)
                return
            }
        })
        loading(false);

        // await dispatch(deletePosts(selectedPosts[0]))
    }

    const publishPostsAction = async (selectedPosts, loading) => {
        await selectedPosts.forEach(async postId => {
            try {
                await dispatch(publishPosts(postId));
                return
            } catch (err) {
                console.log(err)
                return
            }
        })

        loading(false)

    }

    const unPublishPostsAction = async (selectedPosts, loading) => {
        await selectedPosts.forEach(async postId => {
            try {
                await dispatch(unPublishPosts(postId));
                return
            } catch (err) {
                console.log(err)
                return
            }
        });

        loading(false);
    }



    return (
        <>
            <Header collectionId={collectionId} />

            {loading ? <CircularIndicator /> : (
                <Table
                    data={posts}
                    tableHeaderData={tableHeaderData}
                    onSelect={selectPost}
                    actions={
                        {
                            deletePostsAction,
                            publishPostsAction,
                            unPublishPostsAction
                        }
                    }
                />
            )
            }
        </>
    )
}