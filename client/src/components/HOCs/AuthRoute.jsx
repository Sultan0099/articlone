// ! Only access when user is login
import React from 'react'

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthRoute(props) {
    const auth = useSelector(state => state.auth);
    const token = localStorage.getItem("secret");
    const { path, Component } = props;
    if (!token && !auth.user) return <Redirect to='/' />

    return (
        <Route path={path} exact render={(props) => <Component {...props} />} />
    )
}

export default AuthRoute; 