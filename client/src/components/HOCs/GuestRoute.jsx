// ! only access if user is not login
import React from 'react'

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function GuestRoute(props) {
    const auth = useSelector(state => state.auth);
    const token = localStorage.getItem("secret");
    const { path, Component } = props;
    if (token && auth.user) return <Redirect to='/dashboard ' />
    return (
        <Route path={path} render={(props) => <Component {...props} />} />
    )
}

export default GuestRoute; 