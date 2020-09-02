import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import CircularIndicator from "../common/CircularIndicator";
import Header from "./Header";

import Table from "../Table"
// import SnackBar from "./SnackBar";
import Overview from "../common/Overview";

import { getPaginatedPost, deletePosts, publishPosts, unPublishPosts } from "../../redux/_actions/postsAction";

export default () => {
    const [loading, setLoading] = useState(true);




    const posts = useSelector(state => state.posts)

    const dispatch = useDispatch();
    const { collectionId, filter } = useParams()


    useEffect(() => {
        const fetchAllPosts = async () => {
            setLoading(true);
            await dispatch(getPaginatedPost({ collectionId, filter }))
            setLoading(false);
        }
        fetchAllPosts();
    }, [dispatch, collectionId, filter])

    const tableHeaderData = [
        "_id",
        "state",
        "title",
        "description",
        "body",
        "createdAt",
        "updatedAt"
    ]

    const selectPost = (e, selectedPosts) => {
        // console.log(selectedPosts)
    }


    const deletePostsAction = async (selectedPosts, loading) => {

        const copySelectedPosts = [...selectedPosts];
        await selectedPosts.forEach(async postId => {
            try {
                await dispatch(deletePosts(postId));
                copySelectedPosts.pop();
                if (copySelectedPosts.length === 0) {
                    console.log("condition run")
                    loading(false)
                }
            } catch (err) {
                console.log(err)
            }
        })

    }

    const publishPostsAction = async (selectedPosts, loading) => {
        const copySelectedPosts = [...selectedPosts];
        await selectedPosts.forEach(async postId => {
            try {
                await dispatch(publishPosts(postId));
                copySelectedPosts.pop();
                if (copySelectedPosts.length === 0) {
                    console.log("publish condition run")
                    loading(false)
                }
            } catch (err) {
                console.log(err)

            }
        })


    }

    const unPublishPostsAction = async (selectedPosts, loading) => {
        const copySelectedPosts = [...selectedPosts];

        await selectedPosts.forEach(async postId => {
            try {
                await dispatch(unPublishPosts(postId));
                copySelectedPosts.pop();
                if (copySelectedPosts.length === 0) {
                    console.log("up publish condition run")
                    loading(false)
                }
            } catch (err) {
                console.log(err)
            }
        });

    }

    const fetchMorePosts = async (page) => {
        setLoading(true);
        await dispatch(getPaginatedPost({ collectionId, page, filter }))
        setLoading(false);
    }

    const ifUserCreatedPost = posts.allPosts === 0;

    return (
        <>
            <Header collectionId={collectionId} />

            {loading ? <CircularIndicator /> : (
                <>
                    {ifUserCreatedPost ? <Overview /> : (
                        <Table
                            data={posts}
                            filter={filter}
                            tableHeaderData={tableHeaderData}
                            onSelect={selectPost}
                            pagination={
                                {
                                    fetchMorePosts
                                }
                            }
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
        </>
    )
}