import React, { useState } from 'react';

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


import { useParams, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import Editor from "../Editor";
import Form from "./Form";
import Header from "./Header";

import { createPost, uploadTitleImg } from "../../redux/_actions/postsAction";
import useForm from "../../hooks/useForm";
import validate from "./validate";

import styles from "./styles";

export default () => {
    const savedContent = localStorage.getItem("content")
    const classes = styles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [body, setBody] = useState(savedContent ? savedContent : '');
    const [imgLoading, setImgLoading] = useState(false);
    const [titleImg, setTitleImg] = useState("");

    const imageRef = React.createRef();


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
        await dispatch(createPost({ title, description, body, collectionId, titleImg }));
        localStorage.removeItem('content');
        history.push(`/dashboard/${collectionId}/blog/posts`)
    }

    const insertImage = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (
            e.currentTarget &&
            e.currentTarget.files &&
            e.currentTarget.files.length > 0
        ) {
            setImgLoading(true);
            const value = e.currentTarget.files[0];
            let formData = new FormData();
            formData.append("title-img", value);
            const titleImgRes = await dispatch(uploadTitleImg(formData));
            setTitleImg(titleImgRes);
            // setImgLoading(false);
        }
    }

    return (
        <>
            <Header collectionId={collectionId} />
            <Container style={{ width: "60%", marginTop: 30 }}>
                <Form values={values} handleChange={handleChange} errors={errors} />
                <Button
                    type="button"
                    color="primary"
                    variant="contained"
                    disabled={imgLoading}
                    style={{ marginBottom: 10 }}
                    onClick={() => imageRef.current.click()}>
                    Upload Title Img
                </Button>

                {titleImg && (
                    <>
                        <br />
                        <img style={{ width: "300px" }} src={titleImg} onLoad={() => setImgLoading(false)} />
                    </>
                )}

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
                <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    style={{ display: "none" }}
                    onChange={insertImage}
                />
            </Container>
        </>
    )
}