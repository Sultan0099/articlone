import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import AuthRoute from "../HOCs/AuthRoute";

import CreateBlog from "../CreateBlog";
import AllBlogs from "../AllBlogs";

import Sidebar from "./Sidebar";




import Loading from "../../pages/Loading";
import { getSingleCollection } from "../../redux/_actions/collectionAction"
import styles from "./styles";
import Container from "./Container"

export default () => {
    const classes = styles();
    const [loading, setLoading] = useState(true);
    const activeCollection = useSelector(state => state.collections.active);
    const dispatch = useDispatch();
    const { collectionId } = useParams();

    useEffect(() => {
        const fetchSingleCollection = async () => {
            if (activeCollection) {
                if (activeCollection._id === collectionId) {
                    setLoading(false)
                    return;
                }
            }

            await dispatch(getSingleCollection(collectionId));
            setLoading(false);
        }
        fetchSingleCollection()
    })

    if (loading) return <Loading />

    return (
        <div className={classes.wrapper}>
            <Sidebar collection={activeCollection} />
            <AuthRoute path="/dashboard/:collectionId" exact={true} Component={Container} />
            <AuthRoute path="/dashboard/:collectionId/blog/create" exact={true} Component={CreateBlog} />
            <AuthRoute path="/dashboard/:collectionId/blog/all" exact={true} Component={AllBlogs} />
        </div>
    )
};