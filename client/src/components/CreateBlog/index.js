import React, { useState } from 'react';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


import { useParams, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import Editor from "../Editor";
import Form from "./Form";
import Header from "./Header";

import { createPost } from "../../redux/_actions/postsAction";
import useForm from "../../hooks/useForm";
import validate from "./validate";

import styles from "./styles";

export default () => {
    const savedContent = localStorage.getItem("content")
    const classes = styles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [body, setBody] = useState(savedContent ? savedContent : '');

    const submit = () => savePosts();
    const { handleChange, handleSubmit, values, errors, isSubmitting, } = useForm({
        title: '',
        description: '',
    }, submit, validate);


    const { collectionId } = useParams();


    const handleGetEditorData = (data) => {
        setBody(data);
        localStorage.setItem("content", data)
    }

    const savePosts = async () => {
        const { title, description } = values;
        await dispatch(createPost({ title, description, body, collectionId }));
        localStorage.removeItem('content');
        history.push(`/dashboard/${collectionId}/blog/posts`)
    }


    return (
        <>
            <Header collectionId={collectionId} />
            <Container style={{ width: 750, marginTop: 30 }}>
                <Form values={values} handleChange={handleChange} errors={errors} />
                <Editor getEditorData={handleGetEditorData} editorState={body} />

                <div className={classes.wrapper}>
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        fullWidth
                        disabled={isSubmitting}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                     </Button>
                    {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </Container>
        </>
    )
}