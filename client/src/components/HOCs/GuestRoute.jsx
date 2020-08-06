// ! only access if user is not login
import React from 'react'

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function GuestRoute(props) {
    const auth = useSelector(state => state.auth);
    const token = localStorage.getItem("secret");
    const { path, Component, exact } = props;
    console.log(exact)
    if (token && auth.user) return <Redirect to='/collections' />
    return (
        <Route path={path} exact={exact} render={(props) => <Component {...props} />} />
    )
}

export default GuestRoute; 