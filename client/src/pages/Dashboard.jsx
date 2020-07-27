import React from 'react'
import { useSelector } from "react-redux"

import { Redirect } from "react-router-dom";

export default function Dashboard() {
    const user = useSelector(state => state.auth.user);
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>{user.username}</h1>
        </div>
    )
}
