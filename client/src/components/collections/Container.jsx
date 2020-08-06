import React, { useEffect, useState } from 'react'

import Container from "@material-ui/core/Container";


import { useSelector, useDispatch } from "react-redux";


import { getAllCollections } from "../../redux/_actions/collectionAction";

import CreateCollectionCard from "./CreateCollectionCard";
import Collection from "./Collection";
import collectionStyles from "./styles";

export default () => {
    const classes = collectionStyles();
    const [loading, setLoading] = useState(true);
    const { collections } = useSelector(state => state.collections);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchCollection = async () => {
            await dispatch(getAllCollections())
            setLoading(false)
        }

        fetchCollection();

    }, [dispatch])


    if (loading) return <p> Loading .... </p>

    return (
        <Container className={classes.container} component="main">
            <CreateCollectionCard />
            {collections.map(collection => (
                <Collection key={collection._id} collection={collection} />
            ))}

            {console.log(collections)}
        </Container>
    )
}
