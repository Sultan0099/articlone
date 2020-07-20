import React from 'react'
import { useSelector } from "react-redux"
export default function Dashboard() {
    const user = useSelector(state => state.auth.user);
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>{user.username}</h1>
        </div>
    )
}
