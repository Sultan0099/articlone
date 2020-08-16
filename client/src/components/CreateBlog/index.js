import React, { useState } from 'react';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { useParams } from "react-router-dom";

import Editor from "../Editor";
import Form from "./Form";


export default () => {

    const [values, setValues] = useState({
        title: '', description: '', body: ''
    });

    const { collectionId } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleGetEditorData = (data) => {
        setValues({
            ...values,
            body: data
        })
    }

    const savePosts = () => {
        console.log(values, collectionId)

    }


    return (
        <Container style={{ width: 700, marginTop: 30 }}>
            <Form values={values} handleChange={handleChange} />
            <Editor getEditorData={handleGetEditorData} />
            <div style={{ marginTop: 10, float: 'right' }}>
                <Button onClick={savePosts} color="primary" variant="contained"> Save </Button>
                {/* <Button color="primary" onClick={saveAndPublish}>{'Save  & Publish'}</Button> */}

            </div>
        </Container>
    )
}