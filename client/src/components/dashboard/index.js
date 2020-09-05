import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useParams, Switch, Route } from "react-router-dom";

import AuthRoute from "../HOCs/AuthRoute";

import CreateBlog from "../CreateBlog";
import AllBlogs from "../AllBlogs";
import EditBlogs from "../EditBlogs";
import CMS from "../CMS";
import Settings from '../Settings'
import Account from '../Account'
import UserDetails from "../UserDetails";

import Sidebar from "./Sidebar";




import Loading from "../../pages/Loading";
import styles from "./styles";
import FrontPage from "./FrontPage"
import PageNotFound from "../../pages/PageNotFound";

import { getSingleCollection } from "../../redux/_actions/collectionAction"

export default () => {
    const classes = styles();
    const [loading, setLoading] = useState(true);
    const activeCollection = useSelector(state => state.collections.active);
    const dispatch = useDispatch();
    const { collectionId } = useParams();

    useEffect(() => {
        const fetchSingleCollection = async () => {
            setLoading(true);
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
            <div style={{ marginLeft: '60px', width: "100%", }}>


                <Switch>
                    <AuthRoute path="/dashboard/:collectionId" exact={true} Component={FrontPage} />
                    <AuthRoute path="/dashboard/:collectionId/blog/create" exact={true} Component={CreateBlog} />
                    <AuthRoute path="/dashboard/:collectionId/blog/:filter" exact={true} Component={AllBlogs} />
                    <AuthRoute path="/dashboard/:collectionId/blog/edit/:postId" exact={true} Component={EditBlogs} />
                    <AuthRoute path="/dashboard/:collectionId/apis" exact={true} Component={CMS} />
                    <AuthRoute path="/dashboard/:collectionId/settings" exact={true} Component={Settings} />
                    <AuthRoute path="/dashboard/:collectionId/account" exact={true} Component={Account} />
                    <AuthRoute path="/dashboard/:collectionId/user-details" exact={true} Component={UserDetails} />
                    <Route component={PageNotFound} />

                </Switch>

            </div>
        </div>

    )
};