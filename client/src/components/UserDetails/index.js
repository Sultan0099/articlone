import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";
import axios from "axios";

import { getVisitedUser } from "../../redux/_actions/collectionAction";

export default () => {
    const { collectionId } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const getUser = async () => {
            const users = await getVisitedUser(collectionId);
            setUsers([...users]);
            setLoading(false);
        }

        getUser()

    }, [])
    if (loading) return <p>Loading...</p>
    return (
        <div>
            {users.map(d => (
                <p key={d._id}>{d.name}</p>
            ))}
        </div>
    )
}